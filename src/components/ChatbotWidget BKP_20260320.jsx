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
    <div className="fixed bottom-0 right-8 z-[9999] font-sans">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="bg-white border border-[#e0e0e0] border-b-0 rounded-t-lg px-4 py-3 flex items-center gap-3 shadow-lg hover:bg-gray-50 transition-all min-w-[300px]">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img src="/avatar.png" alt="Robin AI" className="w-full h-full object-cover" />
          </div>
          <span className="text-[14px] font-bold text-[#0a66c2]">Chat with Robin's AI</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[420px] h-[650px] bg-white border border-[#e0e0e0] rounded-t-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-[#e0e0e0] bg-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <img src="/avatar.png" alt="Robin AI" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[15px] leading-tight">Robin's Assistant</p>
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
            <button onClick={() => setIsOpen(false)} className="text-gray-400 p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
          </div>

          {/* Body Container */}
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

                  {!isLoading && suggestions.length > 0 && (
                    <div className="flex flex-col gap-3 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-2">
                      <p className="text-[11px] text-gray-400 font-bold px-1 uppercase tracking-widest text-center">How can I help you explore Robin's career?</p>
                      {suggestions.map((s, i) => (
                        <button key={i} onClick={() => handleSend(s.text)} className="flex items-center gap-4 px-6 py-3 bg-white border border-[#0a66c2] text-[#0a66c2] text-[15px] font-semibold rounded-full hover:bg-[#f0f7ff] transition-all shadow-sm active:scale-95 text-left">
                          <span className="shrink-0">{getIcon(s.label)}</span>
                          <span className="flex-1">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 shrink-0">
                  <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-1 bg-gray-100 p-3 rounded-xl text-[14px] outline-none border border-transparent focus:border-[#0a66c2]" placeholder="Ask a follow up..." />
                  <button onClick={() => handleSend()} className="text-[#0a66c2] p-1.5 hover:bg-blue-50 rounded-lg transition-colors"><Send size={20} /></button>
                </div>
              </>
            ) : (
              /* RESTORED FORM VIEW */
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