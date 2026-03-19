"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, FileText, Code, Briefcase, Mail, ChevronRight } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('chat');
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm Robin's AI assistant. I can help you explore his 20+ years of BI and Data strategy. What would you like to see first?" }
  ]);
  const [suggestions, setSuggestions] = useState([
    { label: "BI Experience", icon: <Briefcase size={14} />, text: "Tell me about Robin's 20+ years in BI." },
    { label: "AI & GenAI", icon: <Code size={14} />, text: "What are Robin's recent AI certifications?" },
    { label: "Key Projects", icon: <FileText size={14} />, text: "Tell me about his work at The Salvation Army." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, suggestions]);

  const handleSend = async (textOverride) => {
    const userMessage = textOverride || input.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput("");
    setIsLoading(true);
    setSuggestions([]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      
      const parts = data.text.split('[SUGGESTIONS:');
      const cleanText = parts[0].trim();
      const rawSuggestions = parts[1] ? parts[1].replace(']', '').split('|') : [];

      setMessages(prev => [...prev, { role: 'bot', text: cleanText }]);
      
      if (rawSuggestions.length > 0) {
        setSuggestions(rawSuggestions.map(s => ({ 
          label: s.trim(), 
          text: s.trim(),
          icon: <ChevronRight size={14} /> 
        })));
      } else {
        setSuggestions([
            { label: "BI Experience", icon: <Briefcase size={14} />, text: "Tell me about Robin's BI history." },
            { label: "Contact Robin", icon: <Mail size={14} />, text: "How can I contact Robin?" }
        ]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-8 z-[9999] font-sans">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="bg-white border border-[#e0e0e0] border-b-0 rounded-t-lg px-4 py-3 flex items-center gap-3 shadow-lg hover:bg-gray-50 transition-all min-w-[300px]">
          <div className="w-8 h-8 rounded-full bg-[#0a66c2] flex items-center justify-center text-white"><Bot size={18} /></div>
          <span className="text-[14px] font-bold text-[#0a66c2]">Chat with Robin's AI</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[420px] h-[650px] bg-white border border-[#e0e0e0] rounded-t-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* 1. FIXED HEADER */}
          <div className="shrink-0 p-4 border-b border-[#e0e0e0] bg-white flex justify-between items-center z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center text-white font-bold text-[14px]">RS</div>
              <div>
                <p className="font-bold text-[15px] text-gray-900 leading-tight">Robin's Assistant</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#057642]"></div>
                  <p className="text-[11px] text-[#057642] font-bold uppercase tracking-wider">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 p-2 hover:bg-gray-100 rounded-full"><X size={22} /></button>
          </div>

          {/* 2. SCROLLABLE CHAT AREA */}
          <div className="flex-1 min-h-0 bg-[#f3f2ef] flex flex-col">
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-[14px] leading-relaxed rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#0a66c2] text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200"><Loader2 size={18} className="animate-spin text-[#0a66c2]" /></div>
                </div>
              )}

              {/* FLOATING CONVERSATIONAL BUTTONS */}
              {!isLoading && suggestions.length > 0 && (
                <div className="flex flex-col gap-2.5 pt-2 pb-4 animate-in fade-in slide-in-from-left-4 duration-500">
                  <p className="text-[11px] text-gray-400 font-bold px-1 uppercase tracking-widest">Suggested Options:</p>
                  {suggestions.map((s, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(s.text)} 
                      className="group flex items-center gap-3 px-4 py-2.5 bg-white border border-[#0a66c2]/30 text-[#0a66c2] text-[13px] font-semibold rounded-2xl rounded-tl-none shadow-sm hover:border-[#0a66c2] hover:bg-[#f0f7ff] transition-all w-fit max-w-[85%] active:scale-95"
                    >
                      <span className="shrink-0 bg-[#f0f7ff] p-1.5 rounded-lg group-hover:bg-[#0a66c2] group-hover:text-white transition-colors">
                        {s.icon || <ChevronRight size={14} />}
                      </span>
                      <span className="pr-1">{s.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 3. STICKY INPUT FOOTER */}
          <div className="shrink-0 p-4 bg-white border-t border-gray-200 z-20">
            <div className="relative flex items-center">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                className="w-full bg-gray-100 p-3.5 pr-12 rounded-xl text-[14px] outline-none border border-transparent focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20 transition-all shadow-inner" 
                placeholder="Ask a follow up..." 
              />
              <button 
                onClick={() => handleSend()} 
                disabled={isLoading || !input.trim()}
                className="absolute right-3 text-[#0a66c2] disabled:opacity-30 hover:scale-110 transition-transform p-1.5"
              >
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;