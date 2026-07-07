import React, { useState, useEffect, useRef } from 'react';
import { getChatBotResponse, getInitialMessage, getSuggestions } from '../../services/chatBotService';
import ChatMessage from './ChatMessage';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasAutoOpened, setHasAutoOpened] = useState(false);
    const [suggestions] = useState(getSuggestions());
    const messagesEndRef = useRef(null);

    // Auto-open chat on page load
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (!hasAutoOpened) {
    //             setIsOpen(true);
    //             setHasAutoOpened(true);
    //         }
    //     }, 1500);

    //     return () => clearTimeout(timer);
    // }, [hasAutoOpened]);

    // Initialize with welcome message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: Date.now(),
                    text: getInitialMessage(),
                    isUser: false
                }
            ]);
        }
    }, [isOpen, messages.length]);

    // Auto-scroll to last message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleChatBot = () => {
        setIsOpen(!isOpen);
    };

    // Handles user message submission
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        await sendUserMessage(inputMessage);
        setInputMessage('');
    };

    // Handles suggestion button clicks
    const handleSuggestionClick = async (suggestion) => {
        await sendUserMessage(suggestion);
    };

    // Core message processing
    const sendUserMessage = async (messageText) => {
        // 1. Add user message to state
        // 2. Set isTyping = true
        // 3. Get bot response from service
        // 4. Add bot message to state
        // 5. Set isTyping = false
        const userMessage = {
            id: Date.now(),
            text: messageText,
            isUser: true
        };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = getChatBotResponse(messageText);

            const botMessage = {
                id: Date.now() + 1,
                text: botResponse,
                isUser: false
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 600 + Math.random() * 400);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
                onClick={toggleChatBot}
                aria-label="Toggle Chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="header-content">
                            <span className="bot-icon">🤖</span>
                            <div>
                                <h6 className="mb-0">Portfolio Assistant</h6>
                                <small className="text-muted">Online</small>
                            </div>
                        </div>
                        <button
                            className="btn-close btn-close-white"
                            onClick={toggleChatBot}
                        ></button>
                    </div>

                    {/* Messages */}
                    <div className="chatbot-messages" id="chatMessages">
                        {messages.map((msg) => (
                            <ChatMessage
                                key={msg.id}
                                message={msg.text}
                                isUser={msg.isUser}
                            />
                        ))}

                        {isTyping && (
                            <div className="message-container bot-message">
                                <div className="message-avatar">🤖</div>
                                <div className="message-bubble">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* ✅ SUGGESTION BUTTONS */}
                    <div className="chatbot-suggestions">
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                className="suggestion-btn"
                                onClick={() => handleSuggestionClick(suggestion.value)}
                                disabled={isTyping}
                            >
                                {suggestion.label}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <form className="chatbot-input" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your question..."
                            className="form-control"
                            disabled={isTyping}
                        />
                        <button
                            type="submit"
                            className="btn btn-success"
                            disabled={isTyping || !inputMessage.trim()}
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBot;