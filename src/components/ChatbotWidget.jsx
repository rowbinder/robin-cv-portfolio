"use client";
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-8 z-[9999]">
      {/* The Minimized Tab - LinkedIn Style */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white border border-[#e0e0e0] border-b-0 rounded-t-lg px-4 py-3 flex items-center gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] hover:bg-gray-50 transition-all min-w-[280px]"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Bot size={18} className="text-[#0a66c2]" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-[14px] font-semibold text-[rgba(0,0,0,0.9)]">Chat with Robin's AI</span>
        </button>
      )}

      {/* The Chat Window */}
      {isOpen && (
        <div className="w-[320px] h-[450px] bg-white border border-[#e0e0e0] rounded-t-xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-3 border-b border-[#e0e0e0] flex items-center justify-between bg-white rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0a66c2] flex items-center justify-center text-white text-[10px] font-bold">RS</div>
              <div>
                <p className="text-[14px] font-semibold leading-tight">Robin's Assistant</p>
                <p className="text-[11px] text-green-600 font-medium">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black p-1">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#f3f2ef] space-y-3">
            <div className="bg-white p-3 rounded-lg rounded-tl-none border border-[#e0e0e0] text-[13px] text-[rgba(0,0,0,0.95)] shadow-sm">
              Hello! I'm Robin's AI assistant. I can answer questions about his 20+ years of BI experience, recent AI certifications, or past .NET background. How can I help you today?
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-[#e0e0e0] bg-white">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Write a message..."
                className="w-full pl-3 pr-10 py-2 bg-[#f3f2ef] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#0a66c2]"
              />
              <button className="absolute right-2 text-[#0a66c2] hover:bg-blue-50 p-1 rounded transition-colors">
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">Powered by rowbinder AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;