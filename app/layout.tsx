import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "FarmLease Kenya | Agricultural Marketplace",
  description: "Lease farmland, plantations, and machinery in Kenya",
  generator: "v0.app",
  keywords: "lease, farm lease, kodi, FarmKodi, shamba,SHAMBA,KUKODI,Agriculture, kulima, kilimo,waikwa, kukodi,coffee,rice,tea,land,nataka,kukomboa,ctech",
  authors: [{ name: "CTECH SOLUTIONS Team" }],
  creator: "Ctech solutions",
  publisher: "Ctech solutions",
  robots: "index, follow",
  openGraph: {
    title: "FarmLease Kenya | Agricultural Marketplace",
    description: "Lease farmland, plantations, and machinery in Kenya",
    url: "https://bit.ly/farmkodi, https://www.farmlease.vercel.app",
    siteName: "Farm Kodi",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "FarmLease Kenya | Agricultural Marketplace",
    description:"Lease farmland, plantations, and machinery in Kenya",
  },
  icons: {
    icon: [
      { url: "/farmlease.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-b from-emerald-50 to-teal-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
