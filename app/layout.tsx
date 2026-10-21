import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"
import { LanguageProvider } from "./language-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "Gitahadi | Portofolio",
    template: "%s | Portofolio Gitahadi",
  },
  description: "Portofolio Ketut Gitahadi Merta yang menekuni jaringan komputer, pengembangan aplikasi, dan pernah menjadi pengajar TIK dari Jembrana, Bali.",
  keywords: ["Gitahadi", "Portofolio", "Network Engineer", "Fullstack Developer", "Jaringan Komputer", "Universitas Pendidikan Ganesha", "Jembrana"],
  authors: [{ name: "Ketut Gitahadi Merta" }],
  creator: "Ketut Gitahadi Merta",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Gitahadi | Portofolio",
    description: "Portofolio Ketut Gitahadi Merta yang menekuni jaringan komputer, pengembangan aplikasi, dan pernah menjadi pengajar TIK dari Jembrana, Bali.",
    siteName: "Portofolio Gitahadi",
  },
  twitter: {
    card: "summary",
    title: "Gitahadi | Portofolio",
    description: "Portofolio Ketut Gitahadi Merta yang menekuni jaringan komputer, pengembangan aplikasi, dan pernah menjadi pengajar TIK dari Jembrana, Bali.",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <LanguageProvider>
          <PageLoader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
