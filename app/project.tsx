
"use client"

import { useState } from "react"
import Image from "next/image"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import { useLanguage } from "./language-provider"

type ProjectId = "mconnek" | "portfolio"
type TranslationKey = Parameters<ReturnType<typeof useLanguage>["t"]>[0]

interface SelectedWork {
  id: ProjectId
  title: string
  titleTranslation?: TranslationKey
  category: TranslationKey
  description: TranslationKey
  image?: string
  technologies: string[]
  features?: TranslationKey[]
  results?: TranslationKey[]
}

const selectedWorks: SelectedWork[] = [
  {
    id: "mconnek",
    title: "Mconnek",
    category: "mconnekCategory",
    description: "mconnekDescription",
    image: "/images/networkautomationmconnek.jpg",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "RouterOS API",
      "MessagePack",
      "Midtrans",
      "Wablas",
      "Docker",
      "Laravel Scheduler",
    ],
    features: [
      "mconnekCustomers",
      "mconnekIsolation",
      "mconnekIntegrations",
      "mconnekSerialization",
    ],
    results: [
      "efficiencyActive",
      "efficiencyStatus",
      "efficiencyIsolation",
      "efficiencyNewCustomer",
      "efficiencyUpdate",
      "efficiencyPppoe",
      "efficiencyPool",
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    titleTranslation: "portfolioProjectTitle",
    category: "portfolioCategory",
    description: "portfolioDescription",
    image: "/images/gitahadi-portfolio-cover.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini API",
      "SMTP",
    ],
    features: [
      "portfolioProfile",
      "portfolioAI",
      "portfolioContact",
      "portfolioDesign",
    ],
  },
]

export default function Project() {
  const { language, t } = useLanguage()

  const [expandedProject, setExpandedProject] =
    useState<ProjectId | null>(null)

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-7xl cursor-default border-t border-text-secondary/10 bg-background py-24 md:py-32"
    >
      <FadeDown>
        <div className="mx-auto mb-10 w-full max-w-7xl px-6 text-left md:px-12">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-text-secondary">
            {t("projectsEyebrow")}
          </h2>

          <h3 className="text-4xl font-black tracking-tighter text-text-primary md:text-5xl lg:text-6xl">
            {t("projectsTitle")}
          </h3>

        </div>
      </FadeDown>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3">
        {selectedWorks.map((work, index) => {
          const isExpanded = expandedProject === work.id

          const title = work.titleTranslation
            ? t(work.titleTranslation)
            : work.title

          return (
            <FadeUp key={work.id} delay={index * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-text-secondary/20 bg-background shadow-sm transition-all duration-300 hover:border-text-primary/50 hover:shadow-xl">
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-thirdary/30">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={`${
                        language === "id"
                          ? "Tampilan proyek"
                          : "Project preview"
                      } ${title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center text-6xl font-black tracking-tighter text-text-secondary/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Project Information */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 w-fit rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    {t(work.category)}
                  </span>

                  <h4 className="text-xl font-black tracking-tight text-text-primary">
                    {title}
                  </h4>

                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-text-secondary">
                    {t(work.description)}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-text-secondary/10 bg-thirdary/30 px-3 py-1.5 text-xs font-bold text-text-primary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Details Button */}
                  {(work.features || work.results) && (
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${work.id}`}
                      onClick={() =>
                        setExpandedProject(
                          isExpanded ? null : work.id
                        )
                      }
                      className="mt-6 flex w-full items-center justify-between rounded-xl border border-text-secondary/20 px-4 py-3 text-sm font-bold text-text-primary transition-colors hover:border-text-primary hover:bg-thirdary/20"
                    >
                      <span>
                        {isExpanded
                          ? t("closeDetails")
                          : t("projectDetails")}
                      </span>

                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Expanded Project Details */}
                {isExpanded && (
                  <div
                    id={`project-details-${work.id}`}
                    className="border-t border-text-secondary/10 p-6 pt-5"
                  >
                    {/* Key Features */}
                    {work.features && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-text-primary">
                          {t("keyFeatures")}
                        </h5>

                        <ul className="mt-3 space-y-3 text-sm leading-relaxed text-text-secondary">
                          {work.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-3"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-primary/60"
                              />

                              <span>{t(feature)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Project Results */}
                    {work.results && (
                      <div className="mt-7">
                        <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-text-primary">
                          {t("results")}
                        </h5>

                        <ul className="mt-3 space-y-2">
                          {work.results.map((result) => (
                            <li
                              key={result}
                              className="rounded-lg border border-text-secondary/10 bg-thirdary/20 px-3 py-2 text-xs font-semibold leading-relaxed text-text-secondary"
                            >
                              {t(result)}
                            </li>
                          ))}
                        </ul>

                        <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                          {t("efficiencyDisclaimer")}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}
