import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, Noto_Sans_JP } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"], // 'latin'の指定で日本語も適切に扱われます
  display: "swap",
  variable: "--font-noto-sans-jp", // CSSで使うための変数名
  weight: ["400", "700"], // 400=通常, 700=Bold
})

export const metadata: Metadata = {
  title: "kujira's TRPG Profile",
  description: "TRPG player portfolio showcasing characters and artwork",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}