'use client';

import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

interface ProjectFormProps {
  onClose: () => void;
}

export default function ProjectForm({ onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating an API call
    setTimeout(() => {
      alert("Inquiry sent! (Note: You'll need an API route to make this real)");
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#f0fdf4] p-6 md:p-12 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border border-green-100">
        {/* Header */}
        <div className="bg-black p-8 md:p-12 text-white flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold mb-2">Project Inquiry</h2>
            <p className="text-green-400">Tell me about your vision.</p>
            <p className="text-green-400">This is a "mock" submission.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2"
          >
            <ArrowLeft /> Back
          </button>
        </div>

        {/* Form */}
        <form className="p-8 md:p-12 grid grid-cols-1 gap-6" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-black">Name</label>
            <input 
              type="text" 
              required
              className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none text-black" 
              placeholder="Your Name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-black">Email</label>
            <input 
              type="email" 
              required
              className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none text-black" 
              placeholder="email@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-black">Project Description</label>
            <textarea 
              rows={4} 
              required
              className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none resize-none text-black" 
              placeholder="What are we building?"
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <button 
            disabled={isSubmitting}
            className="py-5 bg-green-500 hover:bg-black text-white font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <Send size={20} />
          </button>
        </form>
      </div>
    </main>
  );
}