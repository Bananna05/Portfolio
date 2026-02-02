export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-[60px] font-bold mb-4 leading-none text-black">About Me</h2>
        <div className="w-67 h-2 bg-green-500 mb-6"></div>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">
        I’m a Computer Science student and aspiring web developer with a passion for creating responsive, 
        user-friendly websites. I focus on helping small businesses and start-ups build their online presence 
        through clean, functional design. I enjoy the problem-solving aspect of coding—analyzing 
        issues and finding solutions brings me both satisfaction and growth.
      </p>
    </section>
  );
}