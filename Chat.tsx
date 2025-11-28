
import React, { useState } from 'react';
import { MOCK_CHATS, MOCK_MESSAGES } from '../constants';
import { Send, Image, MoreVertical, Phone } from 'lucide-react';

const Chat: React.FC = () => {
  const [activeChatId, setActiveChatId] = useState(MOCK_CHATS[0].id);
  const [input, setInput] = useState('');
  
  const activeChat = MOCK_CHATS.find(c => c.id === activeChatId) || MOCK_CHATS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-64px)]">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex h-full border border-gray-200">
        
        {/* Chat List (Sidebar) */}
        <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">Messages</h2>
            </div>
            <div className="overflow-y-auto flex-1">
                {MOCK_CHATS.map(chat => (
                    <button
                        key={chat.id}
                        onClick={() => setActiveChatId(chat.id)}
                        className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition border-b border-gray-100 ${activeChatId === chat.id ? 'bg-teal-50 border-l-4 border-l-primary' : ''}`}
                    >
                        <img src={chat.partnerAvatar} alt={chat.partnerName} className="w-12 h-12 rounded-full" />
                        <div className="flex-1 text-left">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-bold text-gray-900">{chat.partnerName}</h3>
                                {chat.unreadCount > 0 && (
                                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{chat.unreadCount}</span>
                                )}
                            </div>
                            <p className="text-xs text-primary font-medium mb-1">{chat.petName}</p>
                            <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Chat Area */}
        <div className="hidden md:flex flex-1 flex-col bg-gray-50">
            {/* Header */}
            <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={activeChat.partnerAvatar} alt={activeChat.partnerName} className="w-10 h-10 rounded-full" />
                    <div>
                        <h3 className="font-bold text-gray-900">{activeChat.partnerName}</h3>
                        <p className="text-xs text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full"><Phone size={20}/></button>
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full"><MoreVertical size={20}/></button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {MOCK_MESSAGES.map(msg => (
                    <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${msg.isMe ? 'bg-primary text-white rounded-br-none' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'}`}>
                            <p className="text-sm">{msg.text}</p>
                            <p className={`text-[10px] mt-1 text-right ${msg.isMe ? 'text-teal-200' : 'text-gray-400'}`}>{msg.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
                        <Image size={24} />
                    </button>
                    <input 
                        type="text" 
                        className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="bg-primary text-white p-3 rounded-full hover:bg-teal-800 transition">
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile View Placeholder */}
        <div className="md:hidden flex-1 flex items-center justify-center p-8 text-center text-gray-500">
            Select a chat from the menu to start messaging.
        </div>

      </div>
    </div>
  );
};

export default Chat;
