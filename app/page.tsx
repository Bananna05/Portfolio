'use client'; 

import { useState } from "react";
import { 
  Github, Mail, MapPin, GraduationCap, 
  Menu, X, Globe, Monitor, Database, Building2,
  Terminal, Cpu, Code2, Braces, Laptop, GitBranch, ArrowLeft, Send, Phone, Facebook
} from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State to toggle between Portfolio and Form Page
  const [showForm, setShowForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTitle: '',
    description: '',
    timeline: '',
    requirements: '',
    comments: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleService = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please agree to the consent before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('Sending your inquiry...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Your inquiry has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectTitle: '',
          description: '',
          timeline: '',
          requirements: '',
          comments: '',
          consent: false
        });
        setTimeout(() => {
          setShowForm(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending inquiry. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: "HTML", level: "70%" },
    { name: "CSS", level: "65%" },
    { name: "JS", level: "90%" },
  ];

  const techStack = {
    languages: [
      { name: "C", icon: <Cpu className="text-blue-600" /> },
      { name: "JavaScript", icon: <Braces className="text-yellow-500" /> },
      { name: "Python", icon: <Terminal className="text-green-600" /> },
      { name: "TypeScript", icon: <Code2 className="text-blue-500" /> },
    ],
    tools: [
      { name: "VS Code", icon: <Laptop className="text-blue-400" /> },
      { name: "Git", icon: <GitBranch className="text-orange-600" /> },
    ]
  };

  const companies = [
    { name: "Kanami Yani Resort" },
    { name: "Ateneo de Davao University" },
    { name: "Company A" },
    { name: "Company B" },
  ];

  const uiProjects = [
    { name: "Kanami Yani Resort", img: "/photo1.png" },
    { name: "AdDU Portal Redesign", img: "/photo2.png" },
    { name: "Portfolio Concept", img: "/photo3.jpg" },
  ];

  // --- 1. CONTACT FORM VIEW ---
  if (showForm) {
    return (
      <main className="min-h-screen bg-[#f0fdf4] p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border border-green-100">
          {/* Form Header */}
          <div className="bg-black p-8 md:p-12 text-white flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-2">Project Inquiry</h2>
              <p className="text-green-400">Tell me about your vision.</p>
            </div>
            <button 
              onClick={() => setShowForm(false)}
              className="p-4 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
            </button>
          </div>

          {/* Actual Form */}
          <form className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-2">
              <label className="font-bold ml-1 text-black">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your Name" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold ml-1 text-black">Email Address/Phone no.</label>
              <input type="text" name="email" value={formData.email} onChange={handleFormChange} placeholder="Contact Details" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" required />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold ml-1 text-black">Company or Organization Name</label>
              <input type="text" name="company" value={formData.company} onChange={handleFormChange} placeholder="Company Name" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold ml-1 text-black">Project Title</label>
              <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleFormChange} placeholder="What is the project called?" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" required />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold ml-1 text-black">Detailed Project Description</label>
              <textarea rows={4} name="description" value={formData.description} onChange={handleFormChange} placeholder="Describe your goals..." className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all resize-none text-black" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold ml-1 text-black">Project Timeline</label>
              <input type="text" name="timeline" value={formData.timeline} onChange={handleFormChange} placeholder="e.g. 2 months" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold ml-1 text-black">Technical Requirements</label>
              <input type="text" name="requirements" value={formData.requirements} onChange={handleFormChange} placeholder="e.g. React, NextJS" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold ml-1 text-black">Additional Comments/Questions</label>
              <input type="text" name="comments" value={formData.comments} onChange={handleFormChange} placeholder="Anything else?" className="p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none transition-all text-black" />
            </div>

            <div className="md:col-span-2 flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-100 mt-2 text-black">
              <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleFormChange} className="w-5 h-5 accent-green-600" />
              <label htmlFor="consent" className="text-sm font-medium cursor-pointer text-black">I agree to the Consent and Agreement for processing this inquiry.</label>
            </div>

            {submitMessage && (
              <div className={`md:col-span-2 p-4 rounded-2xl text-center font-bold ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitMessage}
              </div>
            )}

            <button disabled={isSubmitting} className="md:col-span-2 py-5 bg-green-500 hover:bg-black text-white font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-green-200 group disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- 2. MAIN PORTFOLIO VIEW ---
  return (
    <main className="min-h-screen bg-white text-black relative overflow-x-hidden">
      
      
      {/* --- IMAGE VIEW MODAL --- */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button className="absolute top-10 right-10 text-white hover:scale-110 transition-transform">
            <X size={40} />
          </button>
          <img src="/profile.jpg" alt="Profile Large" className="max-w-full max-h-[80vh] rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" />
        </div>
      )}

      {/* --- FLOATING MENU BUTTON --- */}
      <button onClick={toggleMenu} className="fixed top-6 right-6 z-[60] p-3 bg-white rounded-lg shadow-xl hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 border border-green-200">
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* --- SIDEBAR PANEL --- */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 pt-24 flex flex-col gap-4">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="relative group px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-green-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out -z-10" />
              <span className="text-2xl font-bold group-hover:text-green-700 transition-colors">{item}</span>
            </a>
          ))}
        </div>
      </div>

      {/* --- HEADER / TOP PANEL --- */}
      <section id="home" className="bg-[#dcfce7] p-8 md:p-12 min-h-[450px] flex items-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col space-y-3">
            <h1 className="text-[50px] font-bold leading-tight">Anna Sofia J. Iñigo</h1>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[16px]"><GraduationCap size={18} /><span>Computer Science Student/Web Developer</span></div>
              <div className="flex items-center gap-2 text-[16px]"><MapPin size={18} /><span>Davao City, Philippines</span></div>
              <div className="flex items-center gap-2 text-[16px]"><Mail size={18} /><span>asjinigo@addu.edu.ph</span></div>
              <div className="flex items-center gap-2 text-[16px] transition-transform duration-300 hover:translate-x-1">
                <Github size={18} />
                <a href="https://github.com/Bananna05" target="_blank" className="text-blue-600 hover:underline font-bold">Github</a>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            {/* WIDENED PROFILE PICTURE */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-[500px] h-64 relative rounded-3xl overflow-hidden border-4 border-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:ring-4 ring-green-300"
            >
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-bold">
                VIEW PHOTO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="max-w-6xl mx-auto p-8 md:p-12">
        <h2 className="text-[60px] font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I’m a Computer Science student and aspiring web developer with a passion for creating responsive, 
          user-friendly websites. I focus on helping small businesses and start-ups build their online presence 
          through clean, functional design. My strongest skill is JavaScript, and I’m continuously improving my 
          knowledge of HTML and CSS to expand my toolkit. I enjoy the problem-solving aspect of coding—analyzing 
          issues and finding solutions brings me both satisfaction and growth. While I tend to think deeply about 
          challenges, this allows me to approach problems with care and precision. As a student, I’m eager to 
          gain more real-world experience and collaborate on projects that make a meaningful impact.</p>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="max-w-6xl mx-auto p-8 md:p-12">
        <h2 className="text-[60px] font-bold mb-2">What can I do?</h2>
        <p className="text-lg text-gray-700 mb-8">Click the buttons to view more!</p>

        <div className="flex flex-col gap-6">
          
          {/* --- WEB DESIGN PANEL --- */}
          <div className="rounded-[40px] bg-[#96cd9a] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-md">
            <button onClick={() => toggleService('web')} className="w-full flex items-center gap-4 p-8 text-left hover:bg-gray-400/20 transition-colors">
              <Globe size={48} className="text-black" />
              <span className="text-4xl font-bold text-black">Web Design</span>
            </button>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedSection === 'web' ? 'max-h-[1000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex-1 space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <p className="text-xl font-bold mb-2 uppercase">{skill.name}</p>
                      <div className="w-full bg-white rounded-full h-8 overflow-hidden shadow-inner">
                        <div className="bg-[#E88D43] h-full transition-all duration-1000 ease-out" style={{ width: expandedSection === 'web' ? skill.level : '0%' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 items-end justify-center">
                  {companies.map((co) => (
                    <div key={co.name} className="flex items-center gap-3 group">
                      <span className="text-xl font-semibold text-gray-800">{co.name}</span>
                      <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center">
                         <Building2 size={24} className="text-blue-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- UI DESIGN PANEL --- */}
          <div className="rounded-[40px] bg-[#b5dcb8] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-md">
            <button onClick={() => toggleService('ui')} className="w-full flex items-center gap-4 p-8 text-left hover:bg-gray-400/20 transition-colors">
              <Monitor size={48} className="text-black" />
              <span className="text-4xl font-bold text-black">UI Design</span>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedSection === 'ui' ? 'max-h-[1000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
                {uiProjects.map((proj) => (
                  <div key={proj.name} className="flex flex-col gap-3 group">
                    <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                       <img src={proj.img} alt={proj.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-lg font-bold text-gray-800 ml-2">{proj.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SERVER SETUP PANEL (TECH STACK) --- */}
          <div className="rounded-[40px] bg-[#ddf1df] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-md">
            <button onClick={() => toggleService('server')} className="w-full flex items-center gap-4 p-8 text-left hover:bg-gray-400/20 transition-colors">
              <Database size={48} className="text-black" />
              <span className="text-4xl font-bold text-black">Server Setup</span>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedSection === 'server' ? 'max-h-[1000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages Side */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold border-b-2 border-black/10 pb-2">Languages</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {techStack.languages.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-4 bg-white/40 p-3 rounded-2xl border border-white hover:bg-white transition-colors">
                        <div className="bg-white p-2 rounded-lg shadow-sm">{tech.icon}</div>
                        <span className="text-xl font-bold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Tools Side */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold border-b-2 border-black/10 pb-2">Tools</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {techStack.tools.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-4 bg-white/40 p-3 rounded-2xl border border-white hover:bg-white transition-colors">
                        <div className="bg-white p-2 rounded-lg shadow-sm">{tech.icon}</div>
                        <span className="text-xl font-bold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONTACTS SECTION --- */}
      <section id="contact" className="max-w-6xl mx-auto p-8 md:p-12 mb-20">
        <div className="bg-black rounded-[40px] p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-[16px]"><Phone size={18} /><span>Phone no. 09171866665</span></div>
              <div className="flex items-center gap-2 text-[16px]"><Facebook size={18} /><span>Anna Sofia J. Iñigo</span></div>
        </div>
      </section>
    </main>
  );
}