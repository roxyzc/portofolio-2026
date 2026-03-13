import anime from "./assets/anime.jpg";
import CV from "./assets/CV.pdf";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30"></div>

      <div className="relative p-4 flex flex-col lg:flex-row min-h-screen lg:h-screen lg:gap-6">
        <div className="w-full lg:flex-3 flex items-center justify-center py-8 lg:py-0">
          <div className="flex flex-col items-center text-center gap-2.5">
            <img
              src={anime}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-6 border-white/20 cursor-pointer"
            />

            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold text-white">
                Ridho Pikriyansyah
              </h1>

              <span className="text-lg text-gray-300 mt-2 uppercase">
                Backend Developer
              </span>
              <div className="h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent my-4"></div>
            </div>

            <div className="mx-auto flex gap-8">
              <a
                href="https://github.com/roxyzc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/ridho-pikriyansyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5S1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-7.66c0-1.83-.03-4.19-2.55-4.19-2.55 0-2.94 1.99-2.94 4.05V23h-4V8z" />
                </svg>
              </a>

              <a
                href="mailto:roxyzc12@gmail.com"
                className="text-gray-300 hover:text-white transition mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.5L0 6.75V18c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V6.75L12 13.5zM12 10.5L24 3.75V3c0-.83-.67-1.5-1.5-1.5h-21C.67 1.5 0 2.17 0 3v.75L12 10.5z" />
                </svg>
              </a>
            </div>
            <div className="mx-auto">
              <a
                href={CV}
                download
                className="mt-4 inline-block px-6 py-2 bg-linear-to-br from-blue-600 via-purple-800 to-blue-600 text-white text-sm rounded-lg transition hover:brightness-110 uppercase tracking-widest font-bold"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-2 lg:overflow-y-auto gap-5 border border-white/20 rounded-2xl p-6 text-white bg-white/10 backdrop-blur-sm shadow-xl scrollbar-hide">
          <div className="flex flex-col py-3">
            <h2 className="text-lg font-bold mb-2 tracking-widest border-b-2 border-white/20 py-2 border-s-6 px-3">
              About
            </h2>

            <div className="text-sm py-3">
              <div className="flex flex-col md:flex-row gap-6 py-4">
                <div className="w-full md:flex-2 text-justify text-md text-gray-300 flex-col space-y-2">
                  <p>
                    Ridho Pikriyansyah is a programmer with deep interests on
                    programming and building safe, efficient, and capable
                    servers. His technical capacity encompasses numerous
                    programming languages that is also bolstered by his drive to
                    keep on learning and growing. He always welcomes new
                    technological advances as an opportunity to adapt and hone
                    his capacity. He also has developed his interpersonal
                    skills, making him no stranger to collaborative approach in
                    a team environment. Over the years, he has completed various
                    projects in both individual and team settings across various
                    fields.
                  </p>

                  <blockquote className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 italic text-center">
                    "Disruption only disrupts when you stop growing and adapting
                    to it."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-3">
            <h2 className="text-lg font-bold mb-2 tracking-widest border-b-2 border-white/20 py-2 border-s-6 px-3">
              Experience
            </h2>

            <div className="text-sm py-3">
              <div className="flex flex-col md:flex-row gap-6 py-4 border-b border-white/10 border-dashed">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    PT. Trainers Management Indonesia
                  </h4>

                  <p className="text-xs text-gray-400">
                    2025 - 2026 • Bekasi, Indonesia • On Site
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">Web Developer</p>
                </div>

                <div className="w-full md:flex-3">
                  <ul className="list-disc list-outside text-xs text-gray-300 space-y-2 pl-4 leading-relaxed">
                    <li>
                      Developed and optimized the company's website to improve
                      website functionality, and user experience.
                    </li>
                    <li>
                      Participated in the planning and implementation of the
                      division's policies.
                    </li>
                    <li>
                      Designed the new internal management website to replace
                      the old system and improve its efficiency.
                    </li>
                    <li>
                      Participated in Halo AI implementation and training for
                      the marketing & sales division.
                    </li>
                    <li>
                      Optimized the website's content and features to support
                      product marketing.
                    </li>
                    <li>
                      Learned and implemented new technologies to support system
                      development.
                    </li>
                    <li>
                      Formulated technical documentation to help the team
                      understand the API.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 py-4 border-b border-white/10 border-dashed">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    PT. Sadaya Teknologi Indonesia
                  </h4>

                  <p className="text-xs text-gray-400">
                    2025 - 2026 • Bekasi, Indonesia • On Site
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Backend Developer
                  </p>
                </div>

                <div className="w-full md:flex-3">
                  <ul className="list-disc list-outside text-xs text-gray-300 space-y-2 pl-4 leading-relaxed">
                    <li>
                      Participated in system design and technology selection
                      process.
                    </li>
                    <li>
                      Carried out cross-division collaboration to align vision
                      on the clients' needs.
                    </li>
                    <li>
                      Deliberated the workflow and system specification in
                      project meetings.
                    </li>
                    <li>
                      Designed and managed database structure to support the
                      system.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 py-4 border-b border-white/10 border-dashed">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    PT. Linkdataku Solusi Indonesia - MSIB Program
                  </h4>

                  <p className="text-xs text-gray-400">
                    2024 - 2024 • Jakarta, Indonesia • Remote
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Backend Developer
                  </p>
                </div>

                <div className="w-full md:flex-3">
                  <ul className="list-disc list-outside text-xs text-gray-300 space-y-2 pl-4 leading-relaxed">
                    <li>
                      Designed and developed system through Model-View
                      Controller (MVC) by using Laravel.
                    </li>
                    <li>
                      Designed and managed MySQL database, including relational
                      database and database migration.
                    </li>
                    <li>
                      Collaborated in a team to complete capstone project based
                      on real-life business study case.
                    </li>
                    <li>
                      Led four divisions and bridged communication with clients
                      to ensure projects' timely completion.
                    </li>
                    <li>
                      Managed and distributed assignments to each member to
                      ensure projects' timely completion.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 py-4">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    Universitas Pelita Bangsa - Freelance
                  </h4>

                  <p className="text-xs text-gray-400">
                    2023 - 2024 • Bekasi, Indonesia • Hybrid
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Backend Developer
                  </p>
                </div>

                <div className="w-full md:flex-3">
                  <ul className="list-disc list-outside text-xs text-gray-300 space-y-2 pl-4 leading-relaxed">
                    <li>
                      Designed and developed database from scratch that entails
                      normalization and relational database.
                    </li>
                    <li>
                      Collaborated with frontend team in ensuring smooth system
                      integration.
                    </li>
                    <li>
                      Adopted new technologies to improve development
                      efficiency.
                    </li>
                    <li>
                      Developed REST API for data management and internal needs.
                    </li>
                    <li>
                      Formulated technical documentation to help the team
                      understand the API.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col py-3">
              <h2 className="text-lg font-bold mb-2 tracking-widest border-b-2 border-white/20 py-2 border-l-4 pl-3">
                Project
              </h2>
            </div>

            <div className="text-sm py-3">
              <div className="flex flex-col gap-6 py-4 border-b border-white/10 border-dashed">
                <div className="w-full space-y-2">
                  <h4 className="font-semibold text-white">
                    Bus Management System - Ticket Reservation
                  </h4>
                  ev
                  <p className="text-xs text-gray-400">Juni 2023 - Juli 2023</p>
                  <div className="flex flex-wrap gap-3 text-xs text-indigo-300">
                    <a
                      href="https://github.com/Akbaroke/ticket-order"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Github (Private)
                    </a>
                    <a
                      href="https://youtu.be/ezXZccs3d8A"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Demo
                    </a>
                    <a
                      href="https://tiket-id.vercel.app/"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Visit
                    </a>
                    <a
                      href="https://documenter.getpostman.com/view/19500855/2s93sdaCVn"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Dokumentasi
                    </a>
                  </div>
                </div>

                <div className="w-full text-gray-200 leading-relaxed text-justify text-xs">
                  The platform was created with the goal to provide greater ease
                  and efficiency in bus ticket reservation and purchase. This
                  platform offers various features, such as ticket reservation,
                  seating plan, and the transportation business management.
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 text-[10px] bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
                    React
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-green-500/20 text-green-300 rounded-md border border-green-500/30">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500/30">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-yellow-500/20 text-yellow-300 rounded-md border border-yellow-500/30">
                    MySQL
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-red-500/20 text-red-300 rounded-md border border-red-500/30">
                    Laravel
                  </span>
                </div>
              </div>
            </div>

            <div className="text-sm py-3">
              <div className="flex flex-col gap-6 py-4">
                <div className="w-full space-y-2">
                  <h4 className="font-semibold text-white">
                    RFID-Based Student Attendance System
                  </h4>

                  <p className="text-xs text-gray-400">Juni 2025 - Juli 2025</p>

                  <div className="flex flex-wrap gap-3 text-xs text-indigo-300">
                    <a
                      href="https://github.com/roxyzc/Presensi-siswa-menggunakan-teknologi-RFID"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Github
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1JSu2H1UV2wJ30_6L7LcbRfCY0PM3Hnaq/view?usp=sharing"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Demo
                    </a>
                    <a
                      href="https://presensiroxyzc.vercel.app/"
                      target="_blank"
                      className="hover:text-indigo-400 transition"
                    >
                      Visit
                    </a>
                  </div>
                </div>

                <div className="w-full text-gray-200 leading-relaxed text-justify text-xs">
                  This platform is a website based student attendance system
                  that is integrated with RFID technology to improve the
                  efficiency of a school's student attendance recording. This
                  system provides numerous features, such as automatic
                  attendance record through RFID cards, students' data
                  management, and the creation of attendance reports.
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 text-[10px] bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
                    React
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-green-500/20 text-green-300 rounded-md border border-green-500/30">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500/30">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-yellow-500/20 text-yellow-300 rounded-md border border-yellow-500/30">
                    MySQL
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-red-500/20 text-red-300 rounded-md border border-red-500/30">
                    Express
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-3">
            <h2 className="text-lg font-bold mb-2 tracking-widest border-b-2 border-white/20 py-2 border-s-6 px-3">
              Education
            </h2>
            <div className="text-sm py-3">
              <div className="flex flex-row gap-6 py-4 border-b border-white/10 border-dashed">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    Universitas Pelita Bangsa
                  </h4>

                  <p className="text-xs text-gray-400">
                    IPK : 3.75/4.0 • 2021 - 2025
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Teknik Informatika
                  </p>
                </div>

                <div className="w-full md:flex-3">
                  <h4 className="font-semibold text-white"> Tugas Akhir </h4>

                  <p className="text-xs text-gray-400">
                    2024 - 2025 • Bekasi, Indonesia
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Rancang Bangun Sistem Presensi Kehadiran Siswa Menggunakan
                    Teknologi RFID Di SDN Sukamanah 01 Dengan Metode Prototype
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 py-4">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    SMKN 1 Cikarang Barat
                  </h4>

                  <p className="text-xs text-gray-400">2019 - 2021</p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Teknik komputer dan Jaringan
                  </p>
                </div>

                <div className="w-full md:flex-3">
                  <h4 className="font-semibold text-white">
                    Ekstrakurikuler Bahasa Jepang
                  </h4>

                  <p className="text-xs text-gray-400">
                    2019 - 2020 • Bekasi, Indonesia
                  </p>

                  <p className="text-xs text-indigo-300 mt-1">
                    Anggota & Logistik Acara
                  </p>

                  <ul className="list-disc list-outside pl-4 mt-2 text-xs text-gray-300 space-y-1">
                    <li>
                      Participated in organizing Japanese cultural events at
                      school.
                    </li>
                    <li>
                      Prepared and assisted in distributing equipment needed
                      during the event.
                    </li>
                    <li>
                      Served as an MC during the welcoming event for guest
                      teachers (Sensei) from Japan.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-3">
            <h2 className="text-lg font-bold mb-2 tracking-widest border-b-2 border-white/20 py-2 border-s-6 px-3">
              Skill
            </h2>
            <div className="text-sm py-3">
              <div className="flex flex-row gap-6 py-4">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">Bahasa</h4>

                  <ul className="list-disc list-outside pl-4 mt-2 text-xs text-gray-300 space-y-1">
                    <li>Indonesia</li>
                    <li>English (Basic)</li>
                  </ul>
                </div>

                <div className="w-full md:flex-3">
                  <h4 className="font-semibold text-white">Teknologi</h4>

                  <ul className="list-disc list-outside pl-4 mt-2 text-xs text-gray-300 space-y-1">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>NestJs</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-3">
            <h2 className="text-lg font-bold  mb-2 tracking-widest border-b-2 border-white/20 py-2 border-s-6 px-3">
              Certification
            </h2>
            <div className="text-sm py-3">
              <div className="flex gap-6 py-4 border-b border-white/10 border-dashed">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">
                    Ahli K3 Umum (AK3U)
                  </h4>

                  <p className="text-xs text-gray-400">
                    Pembinaan: 12 Februari - 2 Maret 2026
                  </p>
                  <p className="text-xs text-gray-400">Expired: 2026 - 2029</p>

                  <p
                    className="text-xs text-indigo-300 mt-1 cursor-pointer hover:text-indigo-200 hover:scale-101 transition duration-300 ease-in-out"
                    onClick={() =>
                      window.open("https://temank3.kemnaker.go.id/", "_blank")
                    }
                  >
                    Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker)
                  </p>
                </div>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex gap-6">
                <div className="w-full md:flex-2">
                  <h4 className="font-semibold text-white">Course Java</h4>

                  <p className="text-xs text-gray-400">
                    OOP - Object Oriented Programming
                  </p>
                  <p className="text-xs text-gray-400">Issued: 2022</p>

                  <p
                    className="text-xs text-indigo-300 mt-1 cursor-pointer hover:text-indigo-200 hover:scale-101 transition duration-300 ease-in-out"
                    onClick={() =>
                      window.open("https://www.sololearn.com", "_blank")
                    }
                  >
                    Solo Learn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
