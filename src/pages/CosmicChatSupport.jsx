import React, { useState, useRef, useEffect } from 'react';

export default function CosmicChatSupport() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Aliya", time: "08:40 PM", isUser: false },
    { id: 2, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Aliya", time: "08:45 PM", isUser: false },
    { id: 3, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Tony Stark 🤖", time: "08:35 PM", isUser: true },
    { id: 4, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Tony Stark 🤖", time: "09:23 AM", isUser: true },
    { id: 5, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Tony Stark 🤖", time: "09:23 AM", isUser: true },
    { id: 6, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Aliya", time: "09:24 AM", isUser: false },
    { id: 7, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Aliya", time: "09:24 AM", isUser: false },
    { id: 8, text: "Lorem ipsum dolor sit amet consectetur. Non sit laoreet nulla.", sender: "Tony Stark 🤖", time: "09:24 AM", isUser: true },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages, showTyping]);

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    setShowTyping(false);
    
    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "Tony Stark 🤖",
      time: getCurrentTime(),
      isUser: true
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setTimeout(() => {
      setShowTyping(true);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-800/30 via-transparent to-transparent"></div>
      
      {/* Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[20%] animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[60%] animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[50%] left-[50%] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[10%] left-[80%] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[90%] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[80%] left-[33%] animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Spiral */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-radial from-orange-300/80 via-orange-400/60 to-transparent blur-sm animate-pulse"></div>

      {/* Main Container */}
      <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto">
        {/* Header */}
        <div className="px-10 py-5">
          <h1 className="text-white text-2xl font-semibold">Chats Support</h1>
        </div>

        {/* Chat Area */}
        <div 
          ref={chatAreaRef}
          className="flex-1 overflow-y-auto px-10 py-5 flex flex-col gap-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 max-w-[70%] animate-[slideIn_0.3s_ease-out] ${
                message.isUser ? 'self-end flex-row-reverse' : 'self-start'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {message.isUser ? 'T' : 'A'}
              </div>
              <div className={`flex flex-col gap-1 ${message.isUser ? 'items-end' : 'items-start'}`}>
                <div
                  className={`px-4 py-3 rounded-xl text-sm leading-relaxed ${
                    message.isUser
                      ? 'bg-orange-300/90 text-gray-800 rounded-br-sm'
                      : 'bg-white/95 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {message.text}
                </div>
                <div className={`flex items-center gap-2 text-xs text-white/70 ${message.isUser ? 'flex-row-reverse' : ''}`}>
                  <span>{message.isUser ? message.time : message.sender}</span>
                  <span>{message.isUser ? message.sender : message.time}</span>
                </div>
              </div>
            </div>
          ))}

          {showTyping && (
            <div className="flex gap-3 max-w-[70%] self-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white/95 px-4 py-3 rounded-xl rounded-bl-sm text-sm text-gray-600">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="px-10 py-5 bg-slate-900/80 backdrop-blur-lg">
          <div className="flex gap-3 bg-white/10 rounded-full px-5 py-3 border border-white/20">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type message here..."
              className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-white/50"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500/80 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}