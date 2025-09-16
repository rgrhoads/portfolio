import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        setNewMessage(e.target.value);
    };

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
        addMessage(newMessage.trim());
        setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        sendMessage();
        }
    };

    return (
        <div className="fixed bottom-0 right-0 m-8">
        <button className="bg-[#507D96] hover:bg-[#4A7090] text-white font-bold py-2 px-4 rounded-xl" onClick={toggleChat}>
            <BsChatDots className="inline-block mr-2" />
            Open Chat
        </button>

        {isOpen && (
            <div className="fixed bottom-0 right-0 mb-8 mr-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#507D96]">
                <span className="absolute top-0 right-0 m-2 cursor-pointer text-gray-600 hover:text-gray-800" onClick={toggleChat}>
                &times;
                </span>
                <ul className="overflow-y-auto max-h-40">
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
                </ul>
                <div className="mt-4 flex">
                <input
                    type="text"
                    className="border-gray-300 border rounded-l-md px-4 py-2 flex-1"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="bg-[#507D96] hover:bg-[#4A7090] text-white font-bold py-2 px-4 rounded-r-md"
                    onClick={sendMessage}
                >
                    Send
                </button>
                </div>
                <button className="mt-4" onClick={clearMessages}>Clear Messages</button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Chat;
