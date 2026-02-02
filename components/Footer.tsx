import { Mail, Phone, Facebook, Github } from "lucide-react";

export default function Footer({ onStartProject }: { onStartProject: () => void }) {
  return (
    <footer id="contact" className="bg-black text-white mt-20 rounded-t-[50px] p-12 md:p-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Let's build <br/><span className="text-green-400">something great.</span></h2>
          <button 
            onClick={onStartProject}
            className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-green-400 transition-colors"
          >
            Get in touch
          </button>
        </div>
        
        <div className="space-y-6 text-xl">
          <p className="text-gray-400 uppercase text-sm tracking-widest text-white">Contact Details</p>
          <div className="flex items-center gap-4"><Mail className="text-green-400" /> asjinigo@addu.edu.ph</div>
          <div className="flex items-center gap-4"><Phone className="text-green-400" /> 09171866665</div>
          <div className="flex items-center gap-4"><Facebook className="text-green-400" /> Anna Sofia J. Iñigo</div>
          <div className="flex items-center gap-4"><Github className="text-green-400" /> @Bananna05</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/10 mt-20 pt-8 flex justify-between text-gray-500">
          <p>© 2024 Anna Sofia Iñigo</p>
          <p>Designed & Coded with Next.js</p>
      </div>
    </footer>
  );
}