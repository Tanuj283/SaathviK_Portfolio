import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-24"
    >
      <section>
        <span className="caption text-gray-500 mb-6 block">Experience & Work</span>
        <h1 className="text-[60px] md:text-[100px] leading-[0.85] font-black tracking-tighter uppercase">
          SELECTED<br/>PROJECTS
        </h1>
      </section>

      <div className="grid grid-cols-12 gap-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            key={project.id}
            className="col-span-12 group border-t border-gray-800 pt-12 pb-4 flex flex-col md:flex-row justify-between gap-8 h-full"
          >
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-[12px] text-gray-600 font-mono uppercase tracking-[0.3em] block">
                  Project 0{index + 1} — {project.date}
                </span>
                <h3 className="text-[40px] md:text-[64px] leading-tight font-black uppercase tracking-tighter group-hover:italic transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="text-[10px] uppercase tracking-[0.2em] text-gray-600 border-l border-gray-800 pl-4 py-1">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between items-end md:w-32">
              <div className="w-16 h-16 border border-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <ArrowUpRight className="text-gray-500 group-hover:text-black transition-colors" size={24} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-800 group-hover:text-gray-500 transition-colors hidden md:block">
                View Details
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="col-span-12 flex flex-col items-center py-24 border-t border-gray-800 mt-20">
        <p className="text-[42px] leading-none font-black italic text-gray-900 uppercase opacity-30 select-none text-center">
          Building the<br/>Future of Web
        </p>
      </section>
    </motion.div>
  );
}
