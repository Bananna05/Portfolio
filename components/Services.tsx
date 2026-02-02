'use client';

import { useState } from "react";
import { 
  Globe, Monitor, Database, Building2, 
  Cpu, Braces, Terminal, Code2, Laptop, GitBranch 
} from "lucide-react";

export default function Services() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleService = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
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

  return (
    <section id="services" className="max-w-6xl mx-auto p-8 md:p-12">
      <h2 className="text-[60px] font-bold mb-8 text-black">What can I do?</h2>
      <div className="flex flex-col gap-6">
        
        {/* --- WEB DESIGN PANEL --- */}
        <div className="rounded-[40px] bg-[#064e3b] overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl group">
        <button onClick={() => toggleService('web')} className="w-full flex items-center gap-4 p-8 text-left group-hover:bg-white/5 transition-colors">
          <Globe size={48} className="text-green-400 transition-transform group-hover:rotate-12" />
          <span className="text-4xl font-bold text-white">Web Design</span>
        </button>
          <div className={`transition-all duration-500 overflow-hidden ${expandedSection === 'web' ? 'max-h-[1000px] p-8 pt-0' : 'max-h-0'}`}>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="flex-1 space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <p className="text-xl font-bold uppercase text-green-100">{skill.name}</p>
                      <p className="text-green-400 font-bold">{skill.level}</p>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-6 overflow-hidden border border-white/10">
                      <div 
                        className="bg-emerald-500 h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: expandedSection === 'web' ? skill.level : '0%' }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-green-100 space-y-4 min-w-[200px]">
                <p className="text-sm uppercase tracking-widest text-green-400 font-bold">Experience With</p>
                {companies.map(c => (
                  <div key={c.name} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Building2 size={18} className="text-green-400"/> 
                    <span className="font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- UI DESIGN PANEL --- */}
        <div className="rounded-[40px] bg-[#dcfce7] overflow-hidden shadow-md border border-green-200 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
          <button onClick={() => toggleService('ui')} className="w-full flex items-center gap-4 p-8 text-left group-hover:bg-green-100/50 transition-colors">
            <Monitor size={48} className="text-green-700 transition-transform group-hover:-translate-y-1" />
             <span className="text-4xl font-bold text-green-900">UI Design</span>
          </button>
          <div className={`transition-all duration-500 overflow-hidden ${expandedSection === 'ui' ? 'max-h-[1000px] p-8 pt-0' : 'max-h-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {uiProjects.map(p => (
                <div key={p.name} className="bg-white p-3 rounded-[25px] shadow-sm">
                  <img src={p.img} alt={p.name} className="rounded-xl mb-3 aspect-video object-cover" />
                  <p className="font-bold text-green-900 ml-2">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- SERVER SETUP PANEL --- */}
        <div className="rounded-[40px] bg-[#f0fdf4] overflow-hidden shadow-md border border-green-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
         <button onClick={() => toggleService('server')} className="w-full flex items-center gap-4 p-8 text-left group-hover:bg-white transition-colors">
          <Database size={48} className="text-green-600 transition-transform group-hover:scale-110" />
          <span className="text-4xl font-bold text-green-800">Server Setup</span>
        </button>
          <div className={`transition-all duration-500 overflow-hidden ${expandedSection === 'server' ? 'max-h-[1000px] p-8 pt-0' : 'max-h-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-900">
              <div className="bg-white/40 p-6 rounded-[30px]">
                <h3 className="text-xl font-bold border-b border-green-200 mb-4 pb-2">Languages</h3>
                <div className="space-y-3">
                  {techStack.languages.map(l => (
                    <div key={l.name} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                      {l.icon} <span className="font-bold">{l.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/40 p-6 rounded-[30px]">
                <h3 className="text-xl font-bold border-b border-green-200 mb-4 pb-2">Tools</h3>
                <div className="space-y-3">
                  {techStack.tools.map(t => (
                    <div key={t.name} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                      {t.icon} <span className="font-bold">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}