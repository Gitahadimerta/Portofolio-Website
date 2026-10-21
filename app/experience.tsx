"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import { useLanguage } from "./language-provider"

type TranslationKey = Parameters<ReturnType<typeof useLanguage>["t"]>[0]

interface ExperienceItem {
  id: number
  company: string
  role: TranslationKey
  description: TranslationKey
  year: number
  duration?: TranslationKey
  skills: TranslationKey[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Tim PKM-GFT FTK Undiksha",
    role: "pkmGftRole",
    description: "pkmGft2025Description",
    year: 2025,
    skills: ["research", "innovation"],
  },
  {
    id: 2,
    company: "Tim Teknisi Tes CPNS",
    role: "technicianRole",
    description: "technicianDescription",
    year: 2025,
    skills: ["computerNetworking", "technicalSupport"],
  },
  {
    id: 3,
    company: "SMKS TI Global Singaraja",
    role: "internRole",
    description: "internDescription",
    year: 2025,
    skills: ["ictTeaching"],
  },
  {
    id: 4,
    company: "Tim PKM-GFT FTK Undiksha",
    role: "pkmGftRole",
    description: "pkmGft2024Description",
    year: 2024,
    skills: ["research", "innovation"],
  },
  {
    id: 5,
    company: "P2MW (Pengabdian kepada Masyarakat)",
    role: "p2mwRole",
    description: "p2mwDescription",
    year: 2024,
    skills: ["leadership", "committeeManagement"],
  },
  {
    id: 6,
    company: "Pokja",
    role: "pokjaRole",
    description: "pokjaDescription",
    year: 2024,
    skills: ["leadership", "publication", "documentation"],
  },
]

experiences.sort((a, b) => b.year - a.year || a.id - b.id)

export default function Experience() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll position of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Add a slight spring physics to the line growth for smoothness
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10" ref={containerRef}>
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">{t("experienceEyebrow")}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">{t("experienceTitle")}</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group/list flex flex-col">
        {experiences.map((exp, index) => {
          return (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: index * 0.1 }} className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-500 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[2px] hover:bg-text-secondary/5 hover:shadow-lg border border-transparent hover:border-text-secondary/10">
              
              {/* Left Column: Date */}
              <div className="md:col-span-1 pt-1 md:pt-2">
                <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">
                  {exp.year}{exp.duration ? ` · ${t(exp.duration)}` : ""}
                </span>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-3 flex flex-col">
                <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/item:text-text-primary transition-colors">{t(exp.role)}</h4>
                <h5 className="text-sm font-bold text-text-secondary tracking-wide uppercase mb-6">{exp.company}</h5>

                <p className="text-base text-text-secondary font-medium leading-relaxed mb-6">{t(exp.description)}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
                      {t(skill)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
