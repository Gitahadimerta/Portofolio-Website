"use client"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import FadeLeft from "@/components/animations/FadeLeft"
import FadeRight from "@/components/animations/FadeRight"
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { language, t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const texts = useMemo(
    () => [t("networkEngineer"), t("fullstackDeveloper")],
    [t],
  )

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const currentIndex = index % texts.length
    const currentText = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentText.length) {
        setSubIndex(subIndex + 1)
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1)
      } else if (!deleting) {
        setDeleting(true)
      } else {
        setDeleting(false)
        setIndex((currentIndex + 1) % texts.length)
      }
    }, deleting ? 75 : 150)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts])

  return (
    <section id="home" className="w-full max-w-7xl mx-auto cursor-default grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <FadeLeft>
        <div className="flex flex-col gap-2">
          <h1 className="text-text-primary text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
            {t("heroGreeting")}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-text-primary to-text-secondary"> Gitahadi</span>
          </h1>

          <div className="relative">
            <span className="text-text-primary text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">{texts[index].substring(0, subIndex)}</span>
            <span className="animate-cursor text-text-secondary text-2xl lg:text-3xl font-light">|</span>
          </div>

          <p className="max-w-xl mt-4 text-text-secondary text-base md:text-lg leading-relaxed font-medium">
            {t("heroIntro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => handleScroll("contacts")} className="cursor-pointer text-sm md:text-base font-bold bg-text-primary text-background px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 ease-out">
              {t("contactMe")}
            </button>
            <a href="mailto:ketutgita04@gmail.com" className="cursor-pointer text-sm md:text-base font-bold border-2 border-text-secondary/20 hover:border-text-primary text-text-primary px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              {t("sendEmail")}
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-text-secondary/10">
            <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-4 block">{t("contact")}</span>
            <div className="flex flex-row gap-4">
              <a href="mailto:ketutgita04@gmail.com" className="px-4 py-3 border border-text-secondary/20 rounded-xl hover:border-text-primary hover:bg-text-primary hover:text-background text-text-primary transition-all duration-300">Email</a>
              <a href="https://wa.me/6281238107952" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-text-secondary/20 rounded-xl hover:border-text-primary hover:bg-text-primary hover:text-background text-text-primary transition-all duration-300">WhatsApp</a>
            </div>
          </div>
        </div>
      </FadeLeft>

      <FadeRight>
        <div className="flex flex-col items-center justify-center relative mt-12 md:mt-0">
          <div className="absolute inset-0 bg-linear-to-tr from-thirdary to-background rounded-full scale-110 opacity-50 blur-2xl"></div>
          <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border border-text-secondary/10 bg-background shadow-2xl md:h-80 md:w-80">
            <Image
              src="/images/profile.jpg"
              alt="Foto profil Ketut Gitahadi Merta"
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 md:-bottom-12 -left-4 md:-left-12 z-20 flex flex-col gap-3">
            {[
              t("networkEngineer"),
              t("fullstackDeveloper"),
              t("ictTeacher"),
              `${t("gpa")} ${language === "id" ? "3,69" : "3.69"}`,
            ].map((stat, statIndex) => (
              <div key={stat} className="floating flex items-center gap-3 bg-background/90 backdrop-blur-md border border-text-secondary/10 p-3 pr-5 rounded-2xl shadow-xl">
                <span className="bg-text-primary text-background p-2 rounded-xl font-black">{statIndex + 1}</span>
                <span className="text-xs md:text-sm font-semibold text-text-primary whitespace-nowrap">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeRight>
    </section>
  )
}
