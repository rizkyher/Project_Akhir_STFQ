import React, { useState } from 'react';
import { Header } from '../components/Header';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', { firstName, lastName, email, phone, bio });
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-5 ">
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <div className="mb-4">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <div className="w-48 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No Photo</span>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Upload Photo
            </label>
            <input
              id="photo"
              type="file"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              onChange={handlePhotoChange}
            />
          </div>
        </div>
        <div className="w-full sm:w-2/3 sm:pl-5">
          <h2 className="text-2xl font-bold mb-4">MY PROFILE</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  value={firstName}
                  placeholder='Enter your first name'
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  value={lastName}
                  placeholder='Enter your lastname'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={phone}
                placeholder='+62'
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={email}
                placeholder='example@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className=" bg-[#29ADB2] hover:bg-[#28888c] text-white font-bold py-1 px-4 rounded-lg mr-5"
              >
                Simpan
              </button>
              <button
                type="submit"
                className=" bg-[#B22929] hover:bg-[#892828] text-white font-bold py-1 px-4 rounded-lg"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
