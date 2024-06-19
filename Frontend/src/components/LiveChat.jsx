import React, { useState, useEffect } from 'react';

const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Effect untuk mensubscribe perubahan pada daftar pesan
    useEffect(() => {
        // Simulasikan daftar pesan yang telah ada
        const initialMessages = [
            { id: 1, text: 'Halo!', sender: 'John Doe' },
            { id: 2, text: 'Hai!', sender: 'Jane Doe' },
        ];
        setMessages(initialMessages);
        // Membersihkan interval saat komponen unmount
    }, []);

    // Handler untuk mengirim pesan baru
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMessageObj = {
                id: Date.now(),
                text: newMessage,
                sender: 'Me',
            };
            setMessages(prevMessages => [...prevMessages, newMessageObj]);
            setNewMessage('');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="h-64 overflow-y-auto mb-4">
                {messages.map(message => (
                    <div key={message.id} className="mb-2">
                        <strong>{message.sender}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Tulis pesan..."
                    className="flex-1 mr-2 p-2 border rounded-lg focus:outline-none"
                />
                <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Kirim</button>
            </div>
        </div>
    );
};

export default LiveChat;
