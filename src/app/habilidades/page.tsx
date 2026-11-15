'use client'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habilidades",
  description:
    "Conheça as habilidades técnicas de Hellen Cristina: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Git, GitHub, testes com Jest e muito mais. Stack moderna focada em desenvolvimento Front-End.",
  openGraph: {
    title: "Habilidades | Hellen Cristina",
    description:
      "Stack técnica de Hellen Cristina: React, Next.js, TypeScript, Tailwind CSS, Git e mais. Front-End Developer com foco em qualidade e boas práticas.",
    url: "/habilidades",
  },
};

export default function Habilidades() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5 text-indigo-950">
            <h1 className="text-4xl font-bold text-center mt-8">Habilidades</h1>
            <h2 className="text-xl font-semibold text-center mt-4">Tecnologias e Ferramentas</h2>
            <h2 className="text-xl font-semibold text-center mt-4">Certificados</h2>
        </main>
    );
}