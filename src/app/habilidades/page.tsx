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
        <>
            <h1 className="text-4xl font-bold text-center mt-8">Habilidades</h1>
        </>
    );
}