import { GraduationCap, MapPin, Send } from "lucide-react";

export default function Hero({ onStartProject }: { onStartProject: () => void }) {
  return (
    <section id="home" className="bg-[#dcfce7] p-8 md:p-12 min-h-[550px] flex items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-[50px] md:text-[70px] font-bold leading-tight">Anna Sofia J. Iñigo</h1>
            <p className="text-xl text-green-800 font-medium">Building digital experiences with precision and care.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2"><GraduationCap size={18} /><span>Computer Science Student @ AdDU</span></div>
            <div className="flex items-center gap-2"><MapPin size={18} /><span>Davao City, Philippines</span></div>
          </div>
          <button onClick={onStartProject} className="w-fit px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all flex items-center gap-3 group">
            Start a Project <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="w-full md:w-[450px] h-80 relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}