"use client"

import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import { useLanguage } from "./language-provider"

type TranslationKey = Parameters<ReturnType<typeof useLanguage>["t"]>[0]

const techCategories: {
  title: TranslationKey
  description: TranslationKey
  technologies: { name: string; icon?: string }[]
}[] = [
  { 
    title: "networkCategory",
    description: "networkDescription",
    technologies: [
      { name: "MikroTik", icon: "/icons/mikrotik.svg" },
      { name: "Winbox", icon: "/icons/winbox.svg" },
      { name: "Ubuntu", icon: "/icons/ubuntu.svg" },
      { name: "Kali Linux", icon: "/icons/kalilinux.svg" },
    ],

  },
  {
    title: "fullstack",
    description: "fullstackDescription",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Livewire", icon: "/icons/livewire.svg" },
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Supabase", icon: "/icons/supabase.svg" },
    ],
  },
]

export default function TechStack() {
  const { t } = useLanguage()
  return (
    <section id="techstack" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10 overflow-hidden">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">{t("techEyebrow")}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">{t("techTitle")}</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {techCategories.map((category, categoryIndex) => (
          <div key={category.title} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3">
              <FadeDown delay={categoryIndex * 0.1}>
                <h4 className="text-2xl font-black text-text-primary tracking-tight mb-2">{t(category.title)}</h4>
                <p className="text-text-secondary font-medium text-sm">{t(category.description)}</p>
              </FadeDown>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
              {category.technologies.map((technology, technologyIndex) => (
                <FadeUp key={technology.name} delay={categoryIndex * 0.1 + technologyIndex * 0.05}>
                  <div className="group flex flex-col items-center justify-center p-6 bg-thirdary/20 hover:bg-thirdary/50 border border-text-secondary/10 hover:border-text-primary/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      {technology.icon ? (
                        <img src={technology.icon} alt="" aria-hidden="true" className="w-full h-full tech-icon-img" />
                      ) : (
                        <span aria-hidden="true" className="w-full h-full flex items-center justify-center font-bold text-xl bg-thirdary/50 rounded-lg">
                          {technology.name.slice(0, 1)}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold text-text-primary text-center">{technology.name}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
