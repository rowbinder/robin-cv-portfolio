"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, FileText, Code, Briefcase, Mail, ChevronRight, UserCheck } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('chat'); // 'chat' or 'form'
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm Robin's AI assistant. I can help you explore his 20+ years of BI and Data strategy. How can I help you today?" }
  ]);
  
  const [suggestions, setSuggestions] = useState([
    { label: "BI Experience", text: "Tell me about Robin's 20+ years in BI." },
    { label: "AI & GenAI", text: "What are Robin's recent AI certifications?" },
    { label: "Key Projects", text: "Tell me about his work at The Salvation Army." }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  
  // Form States
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: '' });
  const [formStatus, setFormStatus] = useState('idle');
  
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, view, suggestions, formStep]);

  const getIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes('bi')) return <Briefcase size={18} />;
    if (l.includes('ai') || l.includes('genai')) return <Code size={18} />;
    if (l.includes('project')) return <FileText size={18} />;
    return <ChevronRight size={18} />;
  };

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
        setSuggestions(rawSuggestions.map(s => ({ label: s.trim(), text: s.trim() })));
      } else {
        setSuggestions([
            { label: "Ask about AI Skills", text: "What AI tools does Robin use?" },
            { label: "Key Projects", text: "Show me another key project." }
        ]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const submitContactForm = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setFormStatus('success');
    } catch (err) {
      setFormStatus('idle');
      alert("Error saving lead.");
    }
  };

return (
    <div className="fixed bottom-6 right-8 z-[9999] font-sans flex flex-col items-end">
      
     

{/* 1. FLOATING CLOSED BUTTON (Mobile: Thicker Brand Ring | Desktop: Pill) */}
{!isOpen && (
  <button 
    onClick={() => setIsOpen(true)} 
    className="fixed bottom-6 right-6 z-[9999] bg-white border border-[#e0e0e0] rounded-full p-1.5 sm:px-5 sm:py-3 flex items-center justify-center sm:justify-start gap-3 shadow-2xl hover:bg-gray-50 transition-all w-16 h-16 sm:w-auto sm:h-auto sm:min-w-[320px] animate-in fade-in slide-in-from-right-4 group"
  >
    {/* Avatar Container with Thicker Ring */}
    {/* ring-4 creates the thick blue border; p-0.5 adds the white gap inside */}
    <div className="w-13 h-13 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 shadow-sm ring-4 ring-[#0a66c2] sm:ring-0 p-0.5 bg-white">
      <img 
        src="/avatar.png" 
        alt="Robin AI" 
        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300" 
      />
    </div>

    {/* Text - Desktop Only */}
    <span className="hidden sm:block text-[14px] font-bold text-[#0a66c2] whitespace-nowrap">
      Chat with Robin's AI
    </span>
  </button>
)}

      {/* 2. FLOATING CHAT WINDOW (Rounded All Around) */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 top-20 sm:inset-auto sm:bottom-6 sm:right-8 sm:w-[420px] sm:h-[650px] bg-white border border-[#e0e0e0] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">  
          {/* Header - Identical to your original but with rounded top */}
          <div className="p-4 border-b border-[#e0e0e0] bg-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <img src="/avatar.png" alt="Robin AI" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[15px] leading-tight text-gray-900">Robin's Assistant</p>
                <div className="flex gap-3 mt-1">
                  <button 
                    onClick={() => setView('chat')} 
                    className={`text-[11px] font-bold uppercase tracking-wider ${view === 'chat' ? 'text-[#0a66c2] underline' : 'text-gray-400'}`}
                  >
                    Chat
                  </button>
                  <button 
                    onClick={() => { setView('form'); setFormStep(1); }} 
                    className={`text-[11px] font-bold uppercase tracking-wider ${view === 'form' ? 'text-[#0a66c2] underline' : 'text-gray-400'}`}
                  >
                    Send Direct Message
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Container - Retaining your #f8f9fa background */}
          <div className="flex-1 flex flex-col bg-[#f8f9fa] overflow-hidden">
            {view === 'chat' ? (
              <>
                <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 scroll-smooth">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 text-[14px] leading-relaxed rounded-2xl shadow-sm ${
                        msg.role === 'user' ? 'bg-[#0a66c2] text-white rounded-tr-none' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && <Loader2 size={20} className="animate-spin text-[#0a66c2] mx-auto mt-4" />}

{/* 
                  {!isLoading && suggestions.length > 0 && (
                    <div className="flex flex-col gap-3 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-2">
                      <p className="text-[11px] text-gray-400 font-bold px-1 uppercase tracking-widest text-center">How can I help you explore Robin's career?</p>
                      {suggestions.map((s, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleSend(s.text)} 
                          className="flex items-center gap-4 px-6 py-3 bg-white border border-[#0a66c2] text-[#0a66c2] text-[15px] font-semibold rounded-full hover:bg-[#f0f7ff] transition-all shadow-sm active:scale-95 text-left"
                        >
                          <span className="shrink-0">{getIcon(s.label)}</span>
                          <span className="flex-1">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
*/}

                {/* Dynamic Left-Aligned Suggestion Chips */}
                {!isLoading && suggestions.length > 0 && (
                  <div className="pt-2 pb-4 px-1">
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3 ml-1">
                      How can I help you explore Robin's career?
                    </p>
                    {/* Changed to justify-start and increased gap to 3 */}
                    <div className="flex flex-row flex-wrap justify-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      {suggestions.map((s, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleSend(s.text)} 
                          // Increased to py-2.5 and px-5, font-14px for better readability
                          className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-[#0a66c2] text-[#0a66c2] text-[14px] font-semibold rounded-full hover:bg-blue-50 hover:shadow-md transition-all active:scale-95 whitespace-nowrap shadow-sm border-opacity-60"
                        >
                          {/* Restored Icon Scale to 100% since text is bigger */}
                          <span className="shrink-0 opacity-90">{getIcon(s.label)}</span>
                          <span className="leading-none">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                </div>

                {/* Input Area - Now rounded at the bottom inside the 3xl container */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 shrink-0">
                  <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                    className="flex-1 bg-gray-100 p-3 rounded-xl text-[14px] outline-none border border-transparent focus:border-[#0a66c2]" 
                    placeholder="Ask a follow up..." 
                  />
                  <button onClick={() => handleSend()} className="text-[#0a66c2] p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
                    <Send size={20} />
                  </button>
                </div>
              </>
            ) : (
              /* FORM VIEW - Exact same logic and colors */
              <div className="flex-1 p-6 bg-white overflow-y-auto">
                {formStatus === 'success' ? (
                  <div className="text-center py-20 animate-in zoom-in">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#057642] font-bold text-2xl">✓</div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Robin will get back to you shortly.</p>
                    <button onClick={() => setView('chat')} className="mt-8 text-[#0a66c2] font-bold underline">Back to Chat</button>
                  </div>
                ) : formStep === 1 ? (
                  <div className="space-y-6 pt-10 text-center animate-in slide-in-from-right-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#0a66c2]"><UserCheck size={32} /></div>
                    <h3 className="text-lg font-bold">One quick detail...</h3>
                    <p className="text-sm text-gray-500">Are you visiting from a recruitment agency or a company hiring directly?</p>
                    <div className="flex flex-col gap-3">
                      <button onClick={() => { setFormData({...formData, type: 'Recruitment Agency'}); setFormStep(2); }} className="w-full py-3 bg-[#0a66c2] text-white rounded-xl font-bold hover:bg-[#084d91]">Recruitment Agency</button>
                      <button onClick={() => { setFormData({...formData, type: 'Direct Company'}); setFormStep(2); }} className="w-full py-3 border-2 border-[#0a66c2] text-[#0a66c2] rounded-xl font-bold hover:bg-blue-50">Direct Company</button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submitContactForm} className="space-y-4 animate-in slide-in-from-right-4">
                    <button onClick={() => setFormStep(1)} className="text-[11px] text-[#0a66c2] font-bold underline mb-2">← BACK</button>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase">Full Name</label>
                      <input required className="w-full border p-2.5 rounded-lg mt-1 outline-[#0a66c2]" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase">Email Address</label>
                      <input required type="email" className="w-full border p-2.5 rounded-lg mt-1 outline-[#0a66c2]" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase">Message</label>
                      <textarea required rows="4" className="w-full border p-2.5 rounded-lg mt-1 outline-[#0a66c2]" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                    </div>
                    <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-[#0a66c2] text-white py-3.5 rounded-xl font-bold hover:bg-[#084d91]">
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
  
};

export default ChatbotWidget;