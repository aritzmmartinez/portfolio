import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { I18nProvider } from "@/components/providers/i18n-provider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aritz Martinez | Full Stack Developer",
  description:
    "Full Stack Developer in Bilbao — React, TypeScript & Go. 3+ years building clean, well-structured apps. I ship things I believe in.",
  keywords: [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Go",
    "Golang",
    "Flutter",
    "Next.js",
    "Clean Architecture",
    "SDK Developer",
    "Web Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "Bilbao",
    "País Vasco",
    "Spain",
  ],
  authors: [{ name: "Aritz Martinez" }],
  creator: "Aritz Martinez",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    title: "Aritz Martinez | Full Stack Developer",
    description:
      "Full Stack Developer in Bilbao — React, TypeScript & Go. 3+ years building clean, well-structured apps. I ship things I believe in.",
    siteName: "Aritz Martinez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aritz Martinez | Full Stack Developer",
    description:
      "Full Stack Developer in Bilbao — React, TypeScript & Go. 3+ years building clean, well-structured apps. I ship things I believe in.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7FB" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
