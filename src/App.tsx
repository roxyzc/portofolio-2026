import { useEffect, useState, type MouseEvent } from "react";
import foto from "./assets/foto_2.png";
import CV from "./assets/CV_Ridho_Pikriyansyah.pdf";

const experience = [
  {
    role: "Full Stack Developer",
    type: "Fulltime",
    company: "PT Trainers Management Indonesia",
    location: "Bekasi, Indonesia",
    date: "Mei 2026 – Sekarang",
    description: [
      "Mengembangkan dan memelihara aplikasi serta website perusahaan.",
      "Mengelola kebutuhan IT dan infrastruktur yang digunakan dalam operasional perusahaan.",
      "Terlibat mengembangkan AI untuk membantu meningkatkan respons layanan pelanggan.",
      "Menyiapkan dan mengelola server untuk aplikasi yang digunakan di production.",
      "Melakukan testing dan debugging untuk memastikan sistem berjalan sesuai kebutuhan.",
      "Memberikan dukungan teknis serta memastikan sistem yang digunakan dapat berjalan dengan baik.",
      "Bekerja sama dengan vendor eksternal dalam implementasi beberapa proyek internal.",
    ],
  },
  {
    role: "IT And Web Innovation",
    type: "Internship",
    company: "PT Trainers Management Indonesia",
    location: "Bekasi, Indonesia",
    date: "November 2025 – Mei 2026",
    description: [
      "Mengembangkan dan memelihara website serta sistem berbasis web untuk kebutuhan perusahaan.",
      "Mengevaluasi teknologi yang digunakan dan mengusulkan perubahan untuk pengembangan website.",
      "Terlibat dalam perencanaan, pengembangan, dan pengujian fitur.",
      "Melakukan perbaikan untuk meningkatkan performa dan pengalaman penggunaan website.",
      "Menerapkan teknologi baru dalam pengembangan sistem.",
      "Membuat dokumentasi teknis dan berkoordinasi dengan tim terkait selama proses pengembangan.",
    ],
  },
  {
    role: "Backend Developer & Project Administration",
    type: "Part-time",
    company: "PT Sadaya Teknologi Indonesia",
    location: "Bekasi, Indonesia",
    date: "Desember 2025 – Sekarang",
    description: [
      "Menangani administrasi dan kebutuhan regulasi perusahaan.",
      "Terlibat dalam perencanaan dan pembahasan kebutuhan proyek.",
      "Memberikan masukan teknis terkait pengembangan backend dan database.",
      "Berkoordinasi dengan tim dalam menentukan alur kerja dan kebutuhan sistem.",
      "Turut berkontribusi dalam pengembangan dan pengelolaan proyek secara keseluruhan.",
    ],
  },
  {
    role: "Full Stack Developer",
    type: "Project-based",
    company: "SDN Sukamanah 01",
    location: "Bekasi, Indonesia",
    date: "Februari 2025 – Juni 2025",
    description: [
      "Mengembangkan sistem presensi siswa berbasis RFID terintegrasi dengan aplikasi web.",
      "Mengembangkan dashboard admin untuk monitoring dan pengelolaan data presensi.",
      "Menganalisis kebutuhan pengguna untuk menyesuaikan fitur sistem.",
      "Merancang database untuk pencatatan dan pengelolaan data kehadiran siswa.",
      "Mengimplementasikan fitur laporan presensi dan manajemen data siswa.",
      "Mengintegrasikan perangkat IoT dengan server melalui REST API.",
      "Mengonfigurasi perangkat RFID menggunakan ESP8266.",
      "Melakukan pengujian dan debugging untuk memastikan akurasi data.",
    ],
  },
  {
    role: "Project Team Lead & Backend Developer",
    type: "Internship - MSIB Batch 7",
    company: "PT Linkdataku Solusi Indonesia (MAXY ACADEMY)",
    location: "Jakarta, Indonesia",
    date: "September 2024 – Desember 2024",
    description: [
      "Memimpin tim yang terdiri dari UI/UX, Frontend, Backend, dan Marketing dalam pengembangan proyek.",
      "Mengatur pembagian tugas dan koordinasi tim selama proses pengembangan hingga proyek selesai.",
      "Mengembangkan aplikasi web pada sisi backend menggunakan Laravel.",
      "Merancang dan mengelola database MySQL sesuai kebutuhan sistem.",
      "Melakukan testing dan debugging untuk memastikan fitur berjalan sesuai kebutuhan.",
      "Menyelaraskan kebutuhan dari berbagai tim dalam proses pengembangan aplikasi.",
    ],
  },
  {
    role: "Backend Developer",
    type: "Project-Based / Freelance",
    company: "Universitas Pelita Bangsa",
    location: "Bekasi, Indonesia",
    date: "September 2023 – Juni 2024",
    description: [
      "Mengembangkan backend dan REST API sebagai bagian dari pengembangan sistem.",
      "Merancang struktur database dan menyesuaikannya dengan kebutuhan sistem.",
      "Berkoordinasi dengan frontend developer dalam menentukan kebutuhan API dan integrasi sistem.",
      "Terlibat dalam pembahasan alur dan kebutuhan sistem bersama tim.",
      "Melakukan testing dan debugging untuk memastikan fitur dan integrasi berjalan dengan baik.",
      "Menyusun dokumentasi teknis untuk memudahkan proses pengembangan dan integrasi.",
    ],
  },
];

const projects = [
  {
    title: "Sistem Presensi Siswa Berbasis RFID",
    description:
      "Sistem presensi siswa berbasis RFID yang mengotomatisasi pencatatan kehadiran dan menyediakan fitur pengelolaan, pemantauan, serta pelaporan data presensi melalui aplikasi web.",
    features: [
      "Pencatatan presensi menggunakan RFID",
      "Pengelolaan data siswa dan presensi",
      "Pengaturan jadwal serta deteksi keterlambatan",
      "Dashboard monitoring presensi",
      "Laporan presensi",
      "REST API untuk menghubungkan perangkat RFID dengan aplikasi web",
    ],
    tech: ["Express.js", "React.js", "MySQL", "Tailwind CSS", "Arduino"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/roxyzc/Presensi-siswa-menggunakan-teknologi-RFID",
        type: "github",
      },
      {
        name: "Demo",
        url: "https://drive.google.com/file/d/1JSu2H1UV2wJ30_6L7LcbRfCY0PM3Hnaq/view?usp=sharing",
        type: "demo",
      },
      {
        name: "Visit",
        url: "https://presensiroxyzc.vercel.app/",
        type: "visit",
      },
    ],
  },
  {
    title: "Sistem Pemesanan Tiket Bus",
    description:
      "Aplikasi web pemesanan tiket bus dengan sistem pencarian jadwal, pemilihan kursi, pemesanan, dan pembayaran. Dilengkapi dashboard admin untuk mengelola kelas perjalanan, armada, bus, jadwal, terminal, serta memantau pendapatan.",
    features: [
      "Pencarian dan pemilihan jadwal perjalanan",
      "Pemilihan kursi secara visual",
      "Pemesanan dan pembayaran tiket",
      "Manajemen kelas perjalanan, armada, bus, jadwal, dan terminal",
      "Dashboard dan grafik analisis pendapatan",
    ],
    tech: ["CodeIgniter", "React.js", "Tailwind CSS", "MySQL"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Akbaroke/ticket-order",
        type: "github",
      },
      {
        name: "Demo",
        url: "https://youtu.be/ezXZccs3d8A",
        type: "demo",
      },
      {
        name: "Documentation",
        url: "https://documenter.getpostman.com/view/19500855/2s93sdaCVn",
        type: "doc",
      },
      {
        name: "Visit",
        url: "https://tiket-id.vercel.app/",
        type: "visit",
      },
    ],
  },
  {
    title: "Sistem Dashboard Manajemen Akses (RBAC)",
    description:
      "Platform dashboard manajemen akses dan aktivitas pengguna yang menggunakan pendekatan role-based access control (RBAC), sekaligus menyediakan monitoring kinerja, beban kerja, dan aktivitas pengguna.",
    features: [
      "Manajemen akses pengguna berdasarkan role dan permission",
      "Monitoring aktivitas pengguna dan perubahan data",
      "Analitik KPI dan performa individu maupun tim",
      "Pemantauan beban kerja dan idle time",
      "Laporan aktivitas, kinerja, dan tren penggunaan",
    ],
    tech: ["Laravel", "Bootstrap", "MySQL"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/roxyzc/Role-Based-Admin-Dashboard",
        type: "github",
      },
      {
        name: "Demo",
        url: "https://drive.google.com/file/d/10flX8yWEdxU42amnHj9ZB2nBG9JqdvCi/view",
        type: "demo",
      },
    ],
  },
  {
    title: "Sistem Penerimaan Peserta Didik Baru (PPDB)",
    description:
      "Platform web Penerimaan Peserta Didik Baru (PPDB) yang menangani proses pendaftaran siswa secara digital, mulai dari pembuatan akun, pengisian data pendaftaran, pengunggahan dokumen, hingga proses pembayaran dan pengelolaan data siswa oleh admin.",
    features: [
      "Registrasi akun, verifikasi OTP, login, dan reset password",
      "Pendaftaran siswa dan pengelolaan data calon siswa",
      "Pengunggahan dokumen pendaftaran seperti akta, kartu keluarga, dan foto",
      "Pengelolaan tahun ajaran, biaya SPP, biaya pendaftaran, dan kelas",
      "Pengelolaan status siswa mulai dari pendaftar, siswa, keluar, hingga lulus",
      "Proses penerimaan siswa dan penempatan kelas",
      "Pengelolaan pembayaran dan riwayat pembayaran",
      "REST API untuk mendukung kebutuhan aplikasi",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "React.js",
      "Firebase",
      "MySQL",
      "Tailwind CSS",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Akbaroke/ppdb_sekolah",
        type: "github",
      },
      {
        name: "Demo",
        url: "https://www.youtube.com/watch?v=MtHbJdW8L0I",
        type: "demo",
      },
    ],
  },
];

const educationList = [
  {
    institution: "Tempat Belajar",
    program: "Professional Business Development Bootcamp Batch #13",
    period: "2026 – Sekarang",
    details: [
      "Mastered end-to-end BD frameworks, including Business Model Canvas (BMC), SWOT, PEST, and Porter's Five Forces for strategic analysis.",
      "Learned B2B/B2C lead generation and prospecting techniques using AI-powered tools such as Apollo.io, LinkedIn Sales Navigator, and CRM workflows.",
      "Developed Go-To-Market (GTM) strategies, consultative sales pitching, negotiation, and client retention/CLV optimization.",
      "Executed end-to-end Business Development study cases involving market research, unit economics, and strategic partnership proposals.",
    ],
  },
  {
    institution: "Universitas Pelita Bangsa",
    program: "S1 - Teknik Informatika",
    gpa: "IPK - 3,75",
    period: "2021/2022 – 2025",
    details: [],
  },
  {
    institution: "SMKN 1 Cikarang Barat",
    program: "Teknik Komputer dan Jaringan",
    period: "2019 – 2021",
    details: [],
  },
];

const skillCategories = [
  {
    category: "Bahasa Pemrograman",
    skills: ["JavaScript", "TypeScript", "PHP", "Go"],
  },
  {
    category: "Framework & Library",
    skills: [
      "Express.js",
      "NestJS",
      "Laravel",
      "CodeIgniter",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Teknologi",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "CI/CD",
      "VPS",
      "Postman",
      "Figma",
      "Microsoft Office",
    ],
  },
  {
    category: "Bahasa",
    skills: ["Bahasa Indonesia (Native)", "Bahasa Inggris (Dasar)"],
  },
];

const certifications = [
  {
    name: "Ahli K3 Umum Kemnaker",
    issuer: "Kementerian Ketenagakerjaan Republik Indonesia",
  },
  {
    name: "Asisten Pengembang Web (Assistant Web Developer)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
  },
];

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
      { rootMargin: "-30% 0px -70% 0px" },
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

  const renderIcon = (type: string) => {
    switch (type) {
      case "github":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path>
          </svg>
        );
      case "demo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        );
      case "doc":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        );
      case "visit":
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className="relative bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 min-h-screen font-sans antialiased"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute hidden lg:block"
        style={{
          background:
            "radial-gradient(600px at var(--mouse-x, 100vw) var(--mouse-y, 0), rgba(29, 78, 216, 0.15), transparent 80%)",
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
                  <h2 className="mt-1 xl:mt-3 text-lg font-medium tracking-tight text-teal-300 sm:text-xl lg:text-base xl:text-xl">
                    Software Engineer / Backend Developer
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-slate-500 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Bekasi, Indonesia
                  </p>
                </div>
              </div>
              <p className="mt-2 xl:mt-4 max-w-sm leading-normal text-sm xl:text-base text-slate-300">
                Software Engineer dengan pengalaman mengembangkan aplikasi web,
                terutama pada sisi backend dan integrasi sistem.
              </p>
              <nav className="nav hidden lg:block border-slate-800 mt-4 xl:mt-4 text-xs xl:text-sm font-bold uppercase tracking-widest text-slate-500">
                <ul className="flex w-max flex-col gap-1 xl:gap-2">
                  <li>
                    <a
                      className={`group flex items-center py-1.5 xl:py-3 ${
                        activeSection === "about"
                          ? "text-slate-200"
                          : "hover:text-slate-200"
                      } transition-all`}
                      href="#about"
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === "about"
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      ></span>
                      Tentang
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-1.5 xl:py-3 ${
                        activeSection === "experience"
                          ? "text-slate-200"
                          : "hover:text-slate-200"
                      } transition-all`}
                      href="#experience"
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === "experience"
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      ></span>
                      Pengalaman
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-1.5 xl:py-3 ${
                        activeSection === "projects"
                          ? "text-slate-200"
                          : "hover:text-slate-200"
                      } transition-all`}
                      href="#projects"
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === "projects"
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      ></span>
                      Projek
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-1.5 xl:py-3 ${
                        activeSection === "education"
                          ? "text-slate-200"
                          : "hover:text-slate-200"
                      } transition-all`}
                      href="#education"
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === "education"
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      ></span>
                      Pendidikan & Keterampilan
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul
              className="mt-4 xl:mt-4 flex items-center gap-3 xl:gap-5 flex-wrap"
              aria-label="Social media"
            >
              <li>
                <a
                  className="block text-slate-400 hover:text-slate-200 transition-colors"
                  href="https://github.com/roxyzc"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="block text-slate-400 hover:text-slate-200 transition-colors"
                  href="https://linkedin.com/in/ridho-pikriyansyah"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5S1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-7.66c0-1.83-.03-4.19-2.55-4.19-2.55 0-2.94 1.99-2.94 4.05V23h-4V8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="block text-slate-400 hover:text-slate-200 transition-colors"
                  href="mailto:roxyzc12@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Email: roxyzc12@gmail.com"
                >
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 13.5L0 6.75V18c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V6.75L12 13.5zM12 10.5L24 3.75V3c0-.83-.67-1.5-1.5-1.5h-21C.67 1.5 0 2.17 0 3v.75L12 10.5z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="block text-slate-400 hover:text-slate-200 transition-colors"
                  href="https://wa.me/6282297634460"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp: +6282297634460"
                >
                  <span className="sr-only">WhatsApp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </li>
              <li className="ml-auto sm:ml-2">
                <a
                  href={CV}
                  download
                  className="group inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-200 transition-colors text-sm"
                >
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </header>

          <main id="content" className="pt-16 lg:w-[48%] lg:py-12 xl:py-18">
            {/* Section: Tentang */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Tentang
                </h2>
              </div>
              <div className="text-slate-400 space-y-4 leading-relaxed">
                <p>
                  Software Engineer dengan pengalaman mengembangkan aplikasi web,
                  terutama pada sisi backend dan integrasi sistem. Terbiasa
                  menggunakan Express.js, NestJS, Laravel, React.js, dan MySQL
                  untuk membangun aplikasi dan REST API.
                </p>
                <p>
                  Memiliki pengalaman mengelola server Linux VPS, Docker, GitHub
                  Actions, CI/CD, serta melakukan deployment aplikasi.
                </p>
                <p>
                  Selain mengembangkan aplikasi, saya juga pernah terlibat dalam
                  pengelolaan sistem dan infrastruktur TI, pengembangan sistem
                  internal perusahaan, serta bekerja sama dengan tim lain dan
                  vendor dalam menjalankan proyek.
                </p>
                <blockquote className="mt-6 border-l-4 border-teal-500/40 pl-4 italic text-slate-300">
                  "Disruption only disrupts when you stop growing and adapting
                  to it."
                </blockquote>
              </div>
            </section>

            {/* Section: Pengalaman */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Pengalaman
                </h2>
              </div>

              <ol className="group/list">
                {experience.map((item, index) => (
                  <li className="mb-12" key={index}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label={item.date}
                      >
                        {item.date}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <span className="inline-flex items-baseline text-base font-semibold text-slate-200">
                              {item.role}
                              <span className="mx-1 text-teal-300 font-normal">
                                · {item.type}
                              </span>
                            </span>
                            <div className="text-sm font-medium text-slate-300">
                              {item.company}
                            </div>
                          </div>
                        </h3>
                        <p className="mt-1 text-xs leading-normal text-slate-500">
                          {item.location}
                        </p>
                        <ul className="mt-3 list-disc pl-4 text-sm leading-normal space-y-1 text-slate-400">
                          {item.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section: Projek */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projek
                </h2>
              </div>
              <ul className="group/list">
                {projects.map((proj, index) => (
                  <li className="mb-12" key={index}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3>
                          <span className="font-semibold leading-tight text-slate-200 text-base">
                            {proj.title}
                          </span>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          {proj.description}
                        </p>

                        {/* Fitur Utama */}
                        <div className="mt-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                            Fitur Utama:
                          </p>
                          <ul className="list-disc pl-4 text-xs text-slate-400 space-y-1">
                            {proj.features.map((feat, fIdx) => (
                              <li key={fIdx}>{feat}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Project Action Links */}
                        {proj.links.length > 0 && (
                          <ul className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-300 relative z-10">
                            {proj.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-1.5 hover:text-teal-300 transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full ring-1 ring-white/10"
                                >
                                  {renderIcon(link.type)}
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tech Badges */}
                        <ul
                          className="mt-4 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {proj.tech.map((t, tIdx) => (
                            <li className="mr-1.5 mt-2" key={tIdx}>
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {t}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Pendidikan & Keterampilan */}
            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Pendidikan & Keterampilan
                </h2>
              </div>

              {/* Education List */}
              <div className="mb-12">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
                  Pendidikan
                </h3>
                <ul className="group/list">
                  {educationList.map((edu, index) => (
                    <li className="mb-8" key={index}>
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          {edu.period}
                        </header>

                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-semibold leading-snug text-slate-200 text-base">
                            {edu.institution}
                          </h3>

                          <p className="mt-0.5 text-sm text-teal-300 font-medium">
                            {edu.program}
                          </p>

                          {edu.gpa && (
                            <p className="mt-1 text-xs text-slate-400 font-medium">
                              {edu.gpa}
                            </p>
                          )}

                          {edu.details.length > 0 && (
                            <div className="mt-3">
                              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-400">
                                {edu.details.map((detail, dIdx) => (
                                  <li key={dIdx}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Certifications Grid */}
              <div className="grid gap-10 lg:grid-cols-1">
                {/* Skills */}
                <div>
                  <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
                    Keterampilan
                  </h3>

                  <div className="space-y-4">
                    {skillCategories.map((cat, index) => (
                      <div key={index}>
                        <p className="mb-2 text-xs uppercase font-semibold tracking-wider text-slate-400">
                          {cat.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sertifikasi */}
                <div className="mt-4">
                  <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
                    Sertifikasi
                  </h3>

                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li
                        key={index}
                        className="rounded-lg bg-slate-800/30 p-4 ring-1 ring-white/5 hover:bg-slate-800/50 transition-colors"
                      >
                        <h4 className="font-semibold text-slate-200 text-sm">
                          {cert.name}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400">
                          {cert.issuer}
                        </p>
                      </li>
                    ))}
                  </ul>
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
