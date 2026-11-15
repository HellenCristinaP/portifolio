import type { Metadata } from "next";
import { Geist, Geist_Mono, Rochester, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rochester = Rochester({
  variable: "--font-Rochester",
  weight: "400",
  style: "normal",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://hellencristinap.github.io"
  ),
  title: {
    default: "Hellen Cristina | Desenvolvedora Front-End",
    template: "%s | Hellen Cristina",
  },
  description:
    "Portfólio de Hellen Cristina, desenvolvedora Front-End especializada em React, Next.js e TypeScript. Estudante de ADS na UNIMES e formanda pela EBAC. Criando interfaces responsivas, acessíveis e modernas.",
  keywords: [
    "desenvolvedora front-end",
    "front-end developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "portfólio",
    "Hellen Cristina",
    "ADS UNIMES",
    "web developer",
    "acessibilidade web",
    "interfaces responsivas",
  ],
  authors: [{ name: "Hellen Cristina", url: "https://github.com/HellenCristinaP" }],
  creator: "Hellen Cristina",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Hellen Cristina | Desenvolvedora Front-End",
    description:
      "Portfólio de Hellen Cristina — Front-End Developer com foco em React, Next.js e TypeScript. Projetos responsivos, acessíveis e com boas práticas modernas.",
    siteName: "Portfólio Hellen Cristina",
    images: [
      {
        url: "/profile.jpeg",
        width: 400,
        height: 400,
        alt: "Hellen Cristina — Desenvolvedora Front-End",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hellen Cristina | Desenvolvedora Front-End",
    description:
      "Front-End Developer especializada em React, Next.js e TypeScript. Confira meu portfólio com projetos e trajetória.",
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${rochester.variable} ${ibmPlexSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Menu />
        {children}
        <footer className="flex flex-row justify-evenly bg-[#1E0041] text-[#F2E9FF] py-4 px-10">
          <Link href="https://github.com/HellenCristinaP" target="_blank" rel="noopener noreferrer">
            <p className="text-sm hover:underline hover:text-shadow-[0_0_0_#F2E9FF]">GitHub</p>
          </Link>
          <Link href="https://www.linkedin.com/in/hellen-cristina-araujo-da-silva/" target="_blank" rel="noopener noreferrer">
            <p className="text-sm hover:underline hover:text-shadow-[0_0_0_#F2E9FF]">LinkedIn</p>
          </Link>
          <Link href="https://www.instagram.com/hellen.cris.001/" target="_blank" rel="noopener noreferrer">
            <p className="text-sm hover:underline hover:text-shadow-[0_0_0_#F2E9FF]">Instagram</p>
          </Link>
        </footer>
      </body>
    </html>
  );
}
