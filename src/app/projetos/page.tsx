import type { Metadata } from "next";
import TemplateProjeto from "@/components/template/projeto";
import { portfolioData } from "@/utils/data/data";

export const metadata: Metadata = {
    title: "Projetos",
    description:
        "Explore os projetos de Hellen Cristina no GitHub: aplicações front-end desenvolvidas com React, Next.js, TypeScript e Tailwind CSS. Código limpo, responsivo e com boas práticas.",
    openGraph: {
        title: "Projetos | Hellen Cristina",
        description:
            "Projetos reais de Hellen Cristina: front-end com React, Next.js e TypeScript. Veja o código, as tecnologias e as soluções criadas.",
        url: "/projetos",
    },
};

export default async function Projetos() {

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-10 bg-[#faf7fd] border-t border-purple-200/60">
            <h1 className="text-4xl font-bold text-center my-8">Projetos</h1>
    
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
                {portfolioData.projects
                    .map((projeto) => (
                        <TemplateProjeto key={projeto.id} {...projeto} />
                    ))}
            </ul>
        </main>
    );
}