"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, Github, Linkedin, Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

const skills = {
  "Languages": ["C++", "Python", "C", "Java", "React", "Node"],
  "Tools/Platforms": ["MongoDB", "VS Code", "MS SQL Server", "Tailwind CSS", "AutoCAD", "Excel", "Figma"],
  "Soft Skills": ["Time Management", "Problem-Solving", "Team Player", "Adaptability"]
};

const experience = [
  {
    title: "AI Ad Generator Website",
    role: "MERN Stack | API KEYS",
    date: "Jan '26 – Feb '26",
    points: [
      "Developed an AI-powered advertisement generator using modern web technologies to create engaging and personalized ad content for various products and services.",
      "Implemented features like prompt-based ad creation, dynamic content generation, and real-time text suggestions to enhance user creativity and efficiency.",
      "Integrated advanced AI APIs to generate high-quality marketing copies, headlines, and captions tailored to different audiences and business needs.",
      "Managed data flow and user interactions efficiently to ensure smooth ad generation, editing process, and seamless overall user experience."
    ]
  },
  {
    title: "E-commerce Trader Website",
    role: "HTML, CSS, JS, PHP, MS SQL Server",
    date: "Mar '25 – Apr '25",
    points: [
      "Developed a fully functional e-commerce website for clothing using front-end and back-end technologies to provide a seamless online shopping experience.",
      "Deployed user-friendly features such as product browsing, add-to-cart functionality, and real time price updates for smooth customer experience.",
      "Linked secure payment gateway supporting both online payments and Cash on Delivery options to enhance user experience.",
      "Managed product data and order workflows efficiently to support easy product addition, checkout process and order confirmation."
    ]
  }
];

const training = [
  {
    title: "Data Structure Algorithm Using CPP",
    institution: "Cipher Schools",
    date: "Jun '23 – Jul '23",
    points: [
      "Acquired in-depth knowledge of Object-Oriented Programming principles, including encapsulation, inheritance, and polymorphism.",
      "Gained a strong foundation in core DSA concepts such as arrays, linked lists, stacks, queues, and sorting algorithms.",
      "Enhanced problem-solving efficiency and coding confidence through structured assignments and practical implementation sessions."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "Aug '23 – Present",
    score: "CGPA: 7.02"
  },
  {
    degree: "Intermediate (PCM)",
    institution: "+2 High School Kinjar",
    location: "Arwal, Bihar",
    date: "Mar '20 – May '22",
    score: "Percentage: 77.8%"
  },
  {
    degree: "Matriculation",
    institution: "Manas Vidyalaya",
    location: "Jehanabad, Bihar",
    date: "May '19 – Mar '20",
    score: "Percentage: 78.6%"
  }
];

const certifications = [
  { title: "Master Generative AI & Generative AI tools", issuer: "Udemy", date: "Aug '25" },
  { title: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Udemy", date: "Sep '25" },
  { title: "Cloud Computing", issuer: "NPTEL", date: "Apr '25" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", date: "Sep '24" }
];

const achievements = [
  "Achieved 4-Star Ranking in Java on HackerRank for solving advanced programming and problem-solving challenges.",
  "Cleared NPTEL Cloud Computing Course (Elite Certificate)."
];

export default function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto font-body text-white/80">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-16">
          
          {/* Header Section */}
          <motion.header variants={itemVariants} className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold glow-text">Satyam Singh</h1>
                <h2 className="text-xl md:text-2xl text-[#00d4ff] font-medium">Software Developer / UI/UX Designer</h2>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 text-sm text-white/70">
                  <a href="mailto:satyamkinjer111@gmail.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors"><Mail size={16} /> satyamkinjer111@gmail.com</a>
                  <a href="tel:+918102672901" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors"><Phone size={16} /> +91 8102672901</a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a href="https://www.linkedin.com/in/satyam-singh21/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><Linkedin size={22} /></a>
                  <a href="https://github.com/satyamrajput12" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><Github size={22} /></a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="/SatyamSingh.pdf" 
                  download="Satyam_Singh_Resume.pdf"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all transform hover:-translate-y-1"
                >
                  <Download size={20} /> Download CV
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-white/70 leading-relaxed text-sm md:text-base">
              Motivated Computer Science Engineering student with an eager-to-learn attitude and a strong foundation in programming and full-stack web development. Proficient in numerous modern technologies with hands-on experience in building scalable web applications. Recognized for strong analytical problem-solving adaptability.
            </div>
          </motion.header>

          {/* Skills Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-display font-semibold flex items-center gap-3"><Award className="text-[#00d4ff]" /> Skills Focus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass p-6 rounded-2xl glass-hover">
                  <h4 className="text-lg font-medium text-[#7c3aed] mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-display font-semibold flex items-center gap-3"><Briefcase className="text-[#00d4ff]" /> Projects & Experience</h3>
            <div className="pl-6 border-l-2 border-[#00d4ff]/30 space-y-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(0,212,255,1)]" />
                  <div className="glass p-6 rounded-2xl glass-hover group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">{exp.title}</h4>
                        <p className="text-[#00d4ff] text-sm font-medium mt-1">{exp.role}</p>
                      </div>
                      <span className="text-white/50 text-sm whitespace-nowrap">{exp.date}</span>
                    </div>
                    <ul className="space-y-2 mt-4 text-sm text-white/70">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-[#7c3aed] mt-1">•</span> <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
              {/* Training as an experience block */}
              {training.map((tr, i) => (
                <div key={`tr-${i}`} className="relative group">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-[#7c3aed] group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                  <div className="glass p-6 rounded-2xl glass-hover hover:border-[#7c3aed]/50 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#7c3aed] transition-colors">{tr.title}</h4>
                        <p className="text-[#7c3aed] text-sm font-medium mt-1">{tr.institution}</p>
                      </div>
                      <span className="text-white/50 text-sm whitespace-nowrap">{tr.date}</span>
                    </div>
                    <ul className="space-y-2 mt-4 text-sm text-white/70">
                      {tr.points.map((point, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-[#00d4ff] mt-1">•</span> <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education & Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Education Timeline */}
            <motion.section variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-display font-semibold flex items-center gap-3"><GraduationCap className="text-[#00d4ff]" /> Education</h3>
              <div className="pl-6 border-l-2 border-[#00d4ff]/30 space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white/50 group-hover:bg-[#00d4ff] group-hover:scale-125 transition-all" />
                    <div className="bg-white/5 p-5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-[#00d4ff]/20 transition-all">
                      <h4 className="font-semibold text-white/90">{edu.degree}</h4>
                      <div className="text-sm text-[#00d4ff] mt-1 flex justify-between items-center">
                        <span>{edu.institution}</span>
                        <span className="text-white/40">{edu.date}</span>
                      </div>
                      <div className="flex justify-between items-center mt-3 text-xs text-white/60">
                        <span className="flex items-center gap-1"><MapPin size={12}/> {edu.location}</span>
                        <span className="font-mono bg-black/30 px-2 py-1 rounded border border-white/5">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Certifications and Achievements */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold flex items-center gap-3 mb-6"><Award className="text-[#7c3aed]" /> Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="glass px-4 py-3 border border-white/5 rounded-xl flex justify-between items-center group hover:bg-white/10 hover:border-[#7c3aed]/30 transition-all">
                      <div className="truncate pr-4 flex flex-col gap-1">
                        <p className="text-sm font-medium leading-tight text-white/90 group-hover:text-[#00d4ff] transition-colors whitespace-normal">{cert.title}</p>
                        <p className="text-xs text-[#7c3aed] font-medium">{cert.issuer}</p>
                      </div>
                      <div className="text-xs font-mono text-[#7c3aed] whitespace-nowrap bg-[#7c3aed]/10 px-2 py-1 rounded">
                        {cert.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold flex items-center gap-3 mb-6"><Award className="text-yellow-500" /> Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((ach, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/70 glass p-4 border border-white/5 rounded-xl items-start hover:border-yellow-500/20 transition-colors">
                      <span className="text-yellow-500 mt-0.5">★</span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          </div>

        </motion.div>
      </main>
    </>
  );
}
