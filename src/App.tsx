import { useEffect, useState, type MouseEvent } from "react";
import foto from "./assets/foto_2.png";
import CV from "./assets/CV.pdf";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  return (
    <div 
      className="relative bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 min-h-screen font-sans antialiased"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute hidden lg:block"
        style={{
          background: "radial-gradient(600px at var(--mouse-x, 100vw) var(--mouse-y, 0), rgba(29, 78, 216, 0.15), transparent 80%)"
        }}
      />
      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 z-40">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-6 xl:py-18">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 xl:gap-5 mb-2 xl:mb-0">
                 <img
                    src={foto}
                    alt="Ridho Pikriyansyah"
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-20 lg:h-20 xl:w-32 xl:h-32 rounded-full border-2 border-slate-700 object-cover shadow-xl grayscale-20 hover:grayscale-0 transition-all duration-300"
                  />
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl lg:text-3xl xl:text-5xl">
                      Ridho Pikriyansyah
                    </h1>
                    <h2 className="mt-1 xl:mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl lg:text-base xl:text-xl">
                      Backend Developer
                    </h2>
                  </div>
              </div>
              <p className="mt-2 xl:mt-4 max-w-sm leading-normal text-sm xl:text-base">
                Passionate about building safe, efficient, and capable backend systems.
              </p>
              <nav className="nav hidden lg:block border-slate-800 mt-4 xl:mt-4 text-xs xl:text-sm font-bold uppercase tracking-widest text-slate-500">
                <ul className="flex w-max flex-col gap-1 xl:gap-2">
                  <li>
                    <a className={`group flex items-center py-1.5 xl:py-3 ${activeSection === 'about' ? 'text-slate-200' : 'hover:text-slate-200'} transition-all`} href="#about">
                      <span className={`mr-4 h-px transition-all ${activeSection === 'about' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-1.5 xl:py-3 ${activeSection === 'experience' ? 'text-slate-200' : 'hover:text-slate-200'} transition-all`} href="#experience">
                      <span className={`mr-4 h-px transition-all ${activeSection === 'experience' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}></span>
                      Experience
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-1.5 xl:py-3 ${activeSection === 'projects' ? 'text-slate-200' : 'hover:text-slate-200'} transition-all`} href="#projects">
                      <span className={`mr-4 h-px transition-all ${activeSection === 'projects' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}></span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-1.5 xl:py-3 ${activeSection === 'education' ? 'text-slate-200' : 'hover:text-slate-200'} transition-all`} href="#education">
                      <span className={`mr-4 h-px transition-all ${activeSection === 'education' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}></span>
                      Education & Skills
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <ul className="mt-4 xl:mt-4 flex items-center gap-3 xl:gap-5" aria-label="Social media">
              <li>
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://github.com/roxyzc" target="_blank" rel="noreferrer">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path></svg>
                </a>
              </li>
              <li>
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://linkedin.com/in/ridho-pikriyansyah" target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5S1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-7.66c0-1.83-.03-4.19-2.55-4.19-2.55 0-2.94 1.99-2.94 4.05V23h-4V8z"></path></svg>
                </a>
              </li>
              <li>
                <a className="block text-slate-400 hover:text-slate-200 transition-colors mt-2" href="mailto:roxyzc12@gmail.com" target="_blank" rel="noreferrer">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.5L0 6.75V18c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V6.75L12 13.5zM12 10.5L24 3.75V3c0-.83-.67-1.5-1.5-1.5h-21C.67 1.5 0 2.17 0 3v.75L12 10.5z"></path></svg>
                </a>
              </li>
              <li className="ml-2">
                <a
                  href={CV}
                  download
                  className="group inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-200 transition-colors"
                >
                  <span>Download CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path></svg>
                </a>
              </li>
            </ul>
          </header>

          <main id="content" className="pt-16 lg:w-[48%] lg:py-12 xl:py-18">
            
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div className="text-slate-400">
                <p className="mb-4">
                  Ridho Pikriyansyah is a programmer with deep interests in programming and building safe, efficient, and capable servers. His technical capacity encompasses numerous programming languages that is also bolstered by his drive to keep on learning and growing.
                </p>
                <p className="mb-4">
                  He always welcomes new technological advances as an opportunity to adapt and hone his capacity. He also has developed his interpersonal skills, making him no stranger to collaborative approach in a team environment. Over the years, he has completed various projects in both individual and team settings across various fields.
                </p>
                <blockquote className="mt-8 border-l-4 border-teal-500/30 pl-4 italic text-slate-300">
                  "Disruption only disrupts when you stop growing and adapting to it."
                </blockquote>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>
              
              <ol className="group/list">
                
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 to 2026">
                      2025 - 2026
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                           <span className="inline-flex items-center text-base focus-visible:text-teal-300">
                             Web Developer · PT. Trainers Management Indonesia
                           </span>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                         Bekasi, Indonesia • On Site
                      </p>
                      <ul className="mt-3 list-disc pl-4 text-sm leading-normal space-y-1 text-slate-400">
                        <li>Developed and optimized the company's website to improve functionality and user experience.</li>
                        <li>Designed new internal management website to replace the old system.</li>
                        <li>Participated in Halo AI implementation and training for the marketing & sales division.</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 to 2026">
                      2025 - 2026
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                           <span className="inline-flex items-center text-base focus-visible:text-teal-300">
                             Backend Developer · PT. Sadaya Teknologi Indonesia
                           </span>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">Bekasi, Indonesia • On Site</p>
                      <ul className="mt-3 list-disc pl-4 text-sm leading-normal space-y-1 text-slate-400">
                        <li>Participated in system design and technology selection process.</li>
                        <li>Designed and managed database structure to support the system.</li>
                        <li>Carried out cross-division collaboration to align vision on the clients' needs.</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to 2024">
                      2024
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                           <span className="inline-flex items-center text-base focus-visible:text-teal-300">
                             Backend Developer · PT. Linkdataku Solusi
                           </span>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">Jakarta, Indonesia • MSIB Remote</p>
                      <ul className="mt-3 list-disc pl-4 text-sm leading-normal space-y-1 text-slate-400">
                        <li>Designed and developed system through MVC pattern using Laravel.</li>
                        <li>Designed and managed MySQL database, including migrations.</li>
                        <li>Collaborated to complete capstone project based on real-life case.</li>
                        <li>Led four divisions to ensure projects' timely completion.</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2023 to 2024">
                      2023 - 2024
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                           <span className="inline-flex items-center text-base focus-visible:text-teal-300">
                             Backend Developer · Universitas Pelita Bangsa (Freelance)
                           </span>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">Bekasi, Indonesia • Hybrid</p>
                      <ul className="mt-3 list-disc pl-4 text-sm leading-normal space-y-1 text-slate-400">
                        <li>Designed and developed database from scratch involving normalization.</li>
                        <li>Developed REST API for data management and internal needs.</li>
                        <li>Formulated technical documentation for team reference.</li>
                      </ul>
                    </div>
                  </div>
                </li>

              </ol>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <ul className="group/list">
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:col-span-8">
                      <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://tiket-id.vercel.app/" target="_blank" rel="noreferrer" aria-label="Bus Management System">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Bus Management System - Ticket Reservation</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-400">
                        The platform was created to provide greater ease and efficiency in bus ticket reservation and purchase. Features include reservation, seating plan, and transportation business management.
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-slate-300 relative z-10">
                        <li>
                          <a href="https://github.com/Akbaroke/ticket-order" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path></svg>
                            GitHub
                          </a>
                        </li>
                        <li>
                          <a href="https://youtu.be/ezXZccs3d8A" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            Demo
                          </a>
                        </li>
                        <li>
                          <a href="https://documenter.getpostman.com/view/19500855/2s93sdaCVn" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                            Documentation
                          </a>
                        </li>
                        <li>
                          <a href="https://tiket-id.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            Visit
                          </a>
                        </li>
                      </ul>
                      <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MySQL</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Laravel</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:col-span-8">
                      <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://presensiroxyzc.vercel.app/" target="_blank" rel="noreferrer" aria-label="RFID Attendance System">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>RFID-Based Student Attendance System</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-400">
                        A web-based attendance system integrated with RFID technology to improve efficiency. Features include automatic record through RFID cards, management, and reporting.
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-slate-300 relative z-10">
                        <li>
                          <a href="https://github.com/roxyzc/Presensi-siswa-menggunakan-teknologi-RFID" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path></svg>
                            GitHub
                          </a>
                        </li>
                        <li>
                          <a href="https://drive.google.com/file/d/1JSu2H1UV2wJ30_6L7LcbRfCY0PM3Hnaq/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            Demo
                          </a>
                        </li>
                        <li>
                          <a href="https://presensiroxyzc.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            Visit
                          </a>
                        </li>
                      </ul>
                      <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MySQL</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

              </ul>
            </section>

            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education & Skills</h2>
              </div>
              <ul className="group/list">
                
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2021 to 2025">
                      2021 - 2025
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        Universitas Pelita Bangsa
                      </h3>
                      <p className="mt-1 text-sm leading-normal text-teal-300">Bachelor of Computer Science (Informatics Engineering)</p>
                      <p className="mt-2 text-sm leading-normal text-slate-400">GPA: 3.75/4.0</p>
                      <div className="mt-4">
                        <h4 className="font-medium text-slate-300 text-sm">Final Project</h4>
                        <p className="mt-1 text-sm text-slate-400">Design and Development of a Student Attendance System Using RFID Technology at SDN Sukamanah 01 Based on the Prototype Method</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to 2021">
                      2019 - 2021
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        SMKN 1 Cikarang Barat
                      </h3>
                      <p className="mt-1 text-sm leading-normal text-teal-300">Computer and Network Engineering</p>
                       <div className="mt-4">
                        <h4 className="font-medium text-slate-300 text-sm">Japanese Language Extracurricular</h4>
                        <p className="mt-1 text-sm text-slate-400">Member & Event Logistics • Participated in organizing events, served as MC for guest teachers.</p>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>

               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">Skills & Tech</h3>
                   <ul className="flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">CSS</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">NestJs</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MySQL</div></li>
                   </ul>
                </div>
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">Certifications</h3>
                    <div className="mb-6">
                       <h4 className="font-medium text-slate-200 leading-snug">General Occupational Health and Safety Expert (AK3U)</h4>
                       <p className="text-sm text-slate-400 mt-1">Ministry of Manpower of the Republic of Indonesia</p>
                       <p className="text-sm text-slate-500 mt-1">2026 - 2029</p>
                    </div>
                    <div>
                       <h4 className="font-medium text-slate-200 leading-snug">Course Java (OOP)</h4>
                       <p className="text-sm text-slate-400 mt-1">Solo Learn</p>
                       <p className="text-sm text-slate-500 mt-1">Issued: 2022</p>
                    </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
