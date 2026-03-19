"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, FileText, Code, Briefcase } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm Robin's AI assistant. I can help you with his BI expertise, AI certifications, or project history. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const quickActions = [
    { label: "BI Experience", icon: <Briefcase size={14} />, text: "Tell me about Robin's 20+ years in BI." },
    { label: "AI & GenAI", icon: <Code size={14} />, text: "What are Robin's recent AI certifications?" },
    { label: "Key Projects", icon: <FileText size={14} />, text: "Tell me about his work at The Salvation Army." }
  ];

  const handleSend = async (textOverride) => {
    const userMessage = textOverride || input.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-8 z-[9999] font-sans">
      {/* Minimized Tab */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white border border-[#e0e0e0] border-b-0 rounded-t-lg px-4 py-3 flex items-center gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] hover:bg-gray-50 transition-all min-w-[280px]"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#f0f7ff] flex items-center justify-center">
              <Bot size={18} className="text-[#0a66c2]" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#057642] border-2 border-white rounded-full"></div>
          </div>
          <span className="text-[14px] font-semibold text-[rgba(0,0,0,0.9)]">Chat with Robin's AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[400px] h-[600px] bg-white border border-[#e0e0e0] rounded-t-xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header - Height remains compact to save space for chat */}
          <div className="p-3 border-b border-[#e0e0e0] flex items-center justify-between bg-white rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center text-white text-[13px] font-bold">RS</div>
              <div>
                <p className="text-[15px] font-semibold leading-tight text-[rgba(0,0,0,0.9)]">Robin's AI Assistant</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#057642]"></div>
                  <p className="text-[12px] text-[#057642] font-medium">Online & Ready</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area - More room for Project Spotlights */}
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto bg-[#f3f2ef] space-y-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0a66c2] text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white text-[rgba(0,0,0,0.9)] rounded-2xl rounded-tl-none border border-[#e0e0e0]'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-[#e0e0e0] shadow-sm">
                  <Loader2 size={18} className="animate-spin text-[#0a66c2]" />
                </div>
              </div>
            )}

            {/* Suggested Topics - Centered and wider for the new window */}
            {!isLoading && messages.length === 1 && (
              <div className="flex flex-col gap-2 pt-2">
                <p className="text-[11px] text-gray-500 font-bold px-1 uppercase tracking-wider">How can I help you explore Robin's career?</p>
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(action.text)}
                    className="flex items-center gap-3 px-4 py-2.5 bg-white border border-[#0a66c2] text-[#0a66c2] text-[13px] font-semibold rounded-full hover:bg-[#f0f7ff] transition-all text-left shadow-sm active:scale-95"
                  >
                    <span className="text-[#0a66c2]">{action.icon}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[#e0e0e0] bg-white">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="w-full pl-4 pr-12 py-3 bg-[#f3f2ef] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0a66c2]/20 border border-transparent focus:border-[#0a66c2] transition-all"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-3 text-[#0a66c2] hover:bg-blue-50 p-1.5 rounded-lg transition-colors disabled:opacity-30"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-3 text-center font-semibold uppercase tracking-[0.1em]">Verified AI Portfolio • 2026</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;