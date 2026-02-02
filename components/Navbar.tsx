import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-6 right-6 z-[60] p-3 bg-white rounded-lg shadow-xl border border-green-200"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 pt-24 flex flex-col gap-4">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="text-2xl font-bold hover:text-green-700 transition-colors px-6 py-4 rounded-xl hover:bg-green-50"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}