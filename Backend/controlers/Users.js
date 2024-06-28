import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['UserID', 'Username', 'Email']
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const Register = async (req, res) => {
    const { Username, Email, Password, confPassword, userType } = req.body;
    if (Password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(Password, salt);
    try {
        const user = await Users.findOne({
            where: {
                Email
            }
        });
        if (user) return res.status(409).json({ msg: "Email already registered" });

        await Users.create({
            Username,
            Email,
            Password: hashPassword,
            UserType: userType
        });
        res.json({ msg: "Register Success" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({
            where: {
                Email: email
            }
        });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const match = await bcrypt.compare(password, user.Password);
        if (!match) return res.status(400).json({ msg: "Wrong password" });

        const userId = user.UserID;
        const username = user.Username;
        const userType = user.UserType;
        const accessToken = jwt.sign({ userId, username, email, userType }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
        });

        await user.update({ Token: accessToken });

        res.json({ token: accessToken, userId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export const Logout = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await Users.findOne({
            where: {
                Email: email
            }
        });
        if (!user) return res.status(404).json({ msg: "User not found" });

        await user.update({ Token: null });

        res.json({ msg: "Logout successful" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};