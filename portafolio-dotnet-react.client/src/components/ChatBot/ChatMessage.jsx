import React from 'react';
import './ChatBot.css';

const ChatMessage = ({ message, isUser }) => {
    return (
        <div className={`message-container ${isUser ? 'user-message' : 'bot-message'}`}>
            <div className="message-avatar">
                {isUser ? '👤' : '🤖'}
            </div>
            <div className="message-bubble">
                <p className="message-text">{message}</p>
            </div>
        </div>
    );
};

export default ChatMessage;