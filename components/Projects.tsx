export default function Projects() {
  const uiProjects = [
    { name: "Kanami Yani Resort", img: "/photo1.png" },
    { name: "AdDU Portal Redesign", img: "/photo2.png" },
    { name: "Portfolio Concept", img: "/photo3.jpg" },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto p-8 md:p-12">
      <h2 className="text-[60px] font-bold mb-10">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {uiProjects.map((proj, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-[30px] bg-gray-100 aspect-video mb-4 relative">
              <img src={proj.img} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold">{proj.name}</h3>
            <p className="text-gray-500">Web Development • UI Design</p>
          </div>
        ))}
      </div>
    </section>
  );
}