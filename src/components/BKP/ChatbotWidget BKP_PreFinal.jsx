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
    { label: "BI Experience", text: "Tell me about Robin's 20+ years in BI." },
    { label: "AI Certifications", text: "What are Robin's recent AI certifications?" },
    { label: "Key Projects", text: "Tell me about his work at The Salvation Army." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: '' });
  const [formStatus, setFormStatus] = useState('idle');
  
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, view, suggestions]);

  const handleSend = async (textOverride) => {
    const userMessage = textOverride || input.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput("");
    setIsLoading(true);
    setSuggestions([]); // Clear old suggestions while loading

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      
      // LOGIC: If the AI sends back [SUGGESTIONS: ...], we parse them
      const parts = data.text.split('[SUGGESTIONS:');
      const cleanText = parts[0].trim();
      const rawSuggestions = parts[1] ? parts[1].replace(']', '').split('|') : [];

      setMessages(prev => [...prev, { role: 'bot', text: cleanText }]);
      
      // Update dynamic suggestions
      if (rawSuggestions.length > 0) {
        setSuggestions(rawSuggestions.map(s => ({ label: s.trim(), text: s.trim() })));
      } else {
        // Fallback to default if AI doesn't provide any
        setSuggestions([
            { label: "Ask about AI Skills", text: "What AI tools does Robin use?" },
            { label: "Project Details", text: "Show me another key project." }
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
          <span className="text-[14px] font-bold text-[#0a66c2]">Explore Robin's Portfolio</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[420px] h-[650px] bg-white border border-[#e0e0e0] rounded-t-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-[#e0e0e0] bg-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center text-white font-bold">RS</div>
              <div>
                <p className="font-bold text-[15px]">Robin Singh AI</p>
                <button onClick={() => setView(view === 'chat' ? 'form' : 'chat')} className="text-[11px] text-[#0a66c2] font-bold uppercase tracking-wider underline">
                  {view === 'chat' ? 'Leave a direct message' : 'Back to Chat'}
                </button>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 p-2"><X size={20} /></button>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col bg-[#f8f9fa] overflow-hidden">
            {view === 'chat' ? (
              <>
                <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 text-[14px] leading-relaxed rounded-2xl ${msg.role === 'user' ? 'bg-[#0a66c2] text-white rounded-tr-none shadow-md' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && <Loader2 size={20} className="animate-spin text-[#0a66c2] mx-auto mt-4" />}

                  {/* DYNAMIC INTERACTIVE BUTTONS */}
                  {!isLoading && suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      {suggestions.map((s, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleSend(s.text)} 
                          className="flex items-center gap-2 px-4 py-2 bg-white border border-[#0a66c2]/30 text-[#0a66c2] text-[13px] font-semibold rounded-full hover:bg-[#0a66c2] hover:text-white transition-all shadow-sm group"
                        >
                          {s.label} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Fixed Input */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
                  <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-1 bg-gray-50 border border-gray-200 p-3 rounded-xl text-[14px] focus:ring-2 focus:ring-[#0a66c2]/20 outline-none" placeholder="Ask a follow up..." />
                  <button onClick={() => handleSend()} className="bg-[#0a66c2] text-white p-3 rounded-xl hover:bg-[#084d91] transition-colors"><Send size={18} /></button>
                </div>
              </>
            ) : (
              /* Contact Form Step-by-Step Logic here (same as previous) */
              <div className="p-8 bg-white flex-1">
                  <h2 className="text-xl font-bold mb-4">Get in touch</h2>
                  {/* ... form content ... */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;