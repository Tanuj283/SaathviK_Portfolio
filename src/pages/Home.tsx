import { motion } from "motion/react";
import { PERSONAL_DETAILS } from "../constants";
import { Phone, Mail, MapPin, GraduationCap, Code, Rocket, User } from "lucide-react";

export default function Home() {
  // Split name for bold typography effect
  const nameParts = PERSONAL_DETAILS.name.split(' ');
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts[1]?.toUpperCase() || '';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-24"
    >
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col">
          <span className="caption text-gray-500 mb-6">Student & Developer</span>
          <h1 className="text-[80px] sm:text-[110px] md:text-[140px] leading-[0.8] font-black tracking-tighter uppercase break-words">
            {firstName}<br/>{lastName}
          </h1>
        </div>
        <div className="text-left md:text-right md:pt-16 max-w-xs">
          <p className="text-[12px] uppercase tracking-widest text-gray-400 mb-2 font-medium">Based in Hyderabad, India</p>
          <p className="text-gray-500 leading-relaxed text-sm">
            Crafting digital experiences through code and curiosity at Mahindra University.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12 md:gap-16">
        {/* Left Column: About & Experience (Research) */}
        <section className="col-span-12 md:col-span-7 flex flex-col gap-16">
          <div>
            <h3 className="caption text-gray-500 mb-8 border-b border-gray-800 pb-3">01 / Profile</h3>
            <p className="text-2xl font-light text-gray-300 leading-normal italic">
              — {PERSONAL_DETAILS.about}
            </p>
          </div>

          <div>
            <h3 className="caption text-gray-500 mb-8 border-b border-gray-800 pb-3">02 / Research Interests</h3>
            <div className="space-y-8">
              {PERSONAL_DETAILS.researchInterests.map((interest, index) => (
                <div key={index}>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[10px] text-gray-600 font-mono">0{index + 1}</span>
                    <h4 className="text-2xl font-bold uppercase tracking-tight">{interest}</h4>
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest pl-8">Exploration & Deep Dive</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Capabilities & Academic */}
        <section className="col-span-12 md:col-span-5 flex flex-col gap-16">
          <div>
            <h3 className="caption text-gray-500 mb-8 border-b border-gray-800 pb-3">03 / Capabilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_DETAILS.skills.map((skill, index) => (
                <div key={index} className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-default">
                  • {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="caption text-gray-500 mb-6 border-b border-gray-800 pb-3">04 / Academic</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold uppercase">Mahindra University</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">B.Tech (CS) — 2023 / Present</p>
                  <p className="text-[10px] text-gray-500 font-mono mt-2 uppercase tracking-widest border border-gray-800 w-fit px-2 py-1">CGPA 5.5 (TILL 5TH SEM)</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase">FIITJEE MIYAPUR</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Intermediate — 80% Achievement</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-between items-end">
              <div className="space-y-4">
                 <h3 className="caption text-gray-500 mb-4 inline-block border-b border-gray-800 pb-2 w-full">05 / Contact</h3>
                 <p className="text-sm uppercase tracking-widest hover:text-white cursor-pointer transition-colors block">{PERSONAL_DETAILS.emails.personal}</p>
                 <p className="text-sm uppercase tracking-widest text-gray-500">{PERSONAL_DETAILS.phone}</p>
                 <p className="text-[10px] uppercase tracking-widest text-gray-600 mt-4 leading-relaxed">{PERSONAL_DETAILS.location}</p>
              </div>
              <div className="w-20 h-20 border border-gray-800 flex items-center justify-center rounded-full shrink-0 hidden md:flex">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
