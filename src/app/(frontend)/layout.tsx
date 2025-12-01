import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./styles.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "That's Hot Nails | Boutique Nail Studio in West Jordan, Utah",
  description:
    "Hand-painted nail art and healthy nail care by Ryan Hiramoto. Experience the difference of a private, one-on-one nail studio in West Jordan, Utah. Specializing in character art, builder gel, and HEMA-free products.",
  keywords:
    "nail art, West Jordan Utah, hand-painted nails, character nail art, healthy nails, HEMA-free, builder gel, boutique nail studio",
  openGraph: {
    title: "That's Hot Nails | Boutique Nail Studio",
    description: "Hand-painted nail art and healthy nail care. One artist, one client, zero rushing.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#FF69B4",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
