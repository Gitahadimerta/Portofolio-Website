"use client"

import ScrollVelocity from "@/components/ScrollVelocity"
import Image from "next/image"
import FadeDown from "@/components/animations/FadeDown"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"
import { useLanguage } from "./language-provider"

export default function About() {
  const { language, t } = useLanguage()
  const velocity = 50

  return (
    <>
      <section id="about" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">{t("aboutEyebrow")}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">{t("aboutTitle")}</h3>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 px-6 md:px-12">
          
          <div className="lg:col-span-5 hidden lg:flex flex-col items-center lg:items-center justify-center relative">
            <div className="w-full max-w-[350px] lg:max-w-[450px] relative">
              <Fade>
                <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-3xl border border-text-secondary/10 bg-thirdary/20 shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Foto profil Ketut Gitahadi Merta"
                    fill
                    sizes="(max-width: 1024px) 0px, 450px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 text-8xl lg:text-9xl font-black text-text-secondary/5 select-none pointer-events-none tracking-tighter mix-blend-multiply dark:mix-blend-screen z-0">GITAHADI.</div>
              </Fade>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="flex flex-col">
                <Fade>
                  <h4 className="text-lg md:text-xl font-bold text-text-primary mb-4 flex items-center border-b border-text-secondary/20 pb-4">{t("whoAmI")}</h4>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">{t("aboutWho")}</p>
                </Fade>
              </div>
              
              <div className="flex flex-col">
                <Fade>
                  <h4 className="text-lg md:text-xl font-bold text-text-primary mb-4 flex items-center border-b border-text-secondary/20 pb-4">{t("aboutExperienceTitle")}</h4>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">{t("aboutExperience")}</p>
                </Fade>
              </div>
            </div>

            <div className="mt-16 md:mt-20">
              <Fade>
                <h4 className="text-lg md:text-xl font-bold text-text-primary mb-8 border-b border-text-secondary/20 pb-4 border-l-4 border-l-text-primary pl-4">{t("personalData")}</h4>
              </Fade>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
                <FadeLeft delay={0.1}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t("name")}</span>
                    <span className="text-base font-semibold text-text-primary">Ketut Gitahadi Merta</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.2}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t("nickname")}</span>
                    <span className="text-base font-semibold text-text-primary">Gitahadi</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.3}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t("location")}</span>
                    <span className="text-base font-semibold text-text-primary">Jembrana, Bali, Indonesia</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.4}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t("phone")}</span>
                    <a href="tel:+6281238107952" className="text-base font-semibold text-text-primary hover:text-text-secondary transition-colors">0812-3810-7952</a>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.5}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Email</span>
                    <a href="mailto:ketutgita04@gmail.com" className="text-base font-semibold text-text-primary hover:text-text-secondary transition-colors underline decoration-text-secondary/30 underline-offset-4">
                      ketutgita04@gmail.com
                    </a>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.6}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t("education")}</span>
                    <span className="text-base font-semibold text-text-primary">Universitas Pendidikan Ganesha</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.7}>
                  <div className="flex flex-col p-2 -m-2 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">{t("gpa")}</span>
                    <span className="text-base font-semibold text-text-primary">{language === "id" ? "3,70" : "3.70"}</span>
                  </div>
                </FadeLeft>
              </div>
            </div>
          </div>
        </div>

        <Fade>
          <div className="mt-24 md:mt-32 pb-6 border-text-secondary/10">
            <ScrollVelocity texts={[t("helloGitahadi"), t("networkEngineer"), t("fullstackDeveloper")]} velocity={velocity} className="font-black tracking-tighter text-thirdary dark:text-button-hover opacity-50" />
          </div>
        </Fade>
      </section>
    </>
  )
}
