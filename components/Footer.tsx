"use client"

import React from "react"
import { useLanguage } from "@/app/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-text-secondary/10 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-text-secondary">
            &copy; {currentYear} Ketut Gitahadi Merta. {t("rightsReserved")}
          </p>
          <p className="text-xs font-medium text-text-secondary/70 mt-1">
            {t("builtWith")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="mailto:ketutgita04@gmail.com" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            Email
          </a>
          <a href="https://wa.me/6281238107952" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
