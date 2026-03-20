"use client";
import React, { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Define your blue brand color
  const brandBlue = "#0a66c2"; 

  // --- CLOSED STATE (The Inviting Pill) ---
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 group animate-fade-in hover:scale-105 transition-all duration-300 ease-out"
        aria-label="Open Robin AI Assistant"
      >
        {/* The Capsule Background */}
        <div 
          className="flex items-center gap-3 bg-white pl-4 pr-3 py-2 rounded-full shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow"
        >
          {/* Proactive Text (Optional but engaging) */}
          <span 
            style={{ color: brandBlue }}
            className="font-semibold text-sm tracking-tight pt-0.5"
          >
            Chat with Robin AI
          </span>

          {/* The New Blue Avatar Circle */}
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md relative">
            <img 
              src="/avatar.png" 
              alt="Robin AI Assistant" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Arrow Icon (Visually guides the click) */}
          <ArrowRight size={18} style={{ color: brandBlue }} className="pt-0.5" />
        </div>
      </button>
    );
  }

  // --- OPEN STATE (Standard Chat Window) ---
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-slide-up z-50">
      
      {/* 1. Standard Header (Updated for consistency) */}
      <div 
        style={{ backgroundColor: brandBlue }}
        className="p-4 text-white flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/50 relative">
            <img 
              src="/avatar.png" 
              alt="Robin AI Assistant" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight pt-0.5">Robin AI</h2>
            <p className="text-[12px] opacity-80 leading-none">Generative AI Strategist</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white opacity-70 hover:opacity-100 text-2xl font-bold p-1"
        >
          ×
        </button>
      </div>

      {/* 2. Messages Area (Placeholder) */}
      <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-gray-50/50">
        <div className="flex justify-start gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-1 border border-gray-200">
             <img src="/avatar.png" alt="Robin AI" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white p-3 rounded-xl rounded-bl-none shadow-sm border border-gray-100 text-gray-800 text-sm max-w-[80%] leading-relaxed">
            Welcome to my portfolio! I'm Robin's AI agent. I can discuss his 20+ years of **BI leadership**, his work with **Data Vault 2.0**, or his recent **GenAI initiatives** at Google. How can I help you?
          </div>
        </div>

        {/* Loading Indicator (When fetching AI response) */}
        {isLoading && (
          <div className="flex justify-start items-center gap-2">
            <Loader2 size={16} style={{ color: brandBlue }} className="animate-spin" />
            <span className="text-gray-400 text-sm">Robin is thinking...</span>
          </div>
        )}
      </div>

      {/* 3. Standard Input Area */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <input 
          type="text"
          placeholder="Ask me about BI, GenAI, or Project Management..."
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0a66c2] text-sm"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // Add send logic here later
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000); // Simulate network
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChatbotWidget;