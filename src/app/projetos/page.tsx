import type { Metadata } from "next";
import getProjectsGitHub from "@/lib/api/project";
import TemplateProjeto from "@/components/template/projeto";

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
    const { repos, errorMessage } = await getProjectsGitHub();

    return (
        <>
            <h1 className="text-4xl font-bold text-center my-8">Projetos</h1>
            {errorMessage && (
                <p className="text-red-500 text-center mx-10">{errorMessage}</p>
            )}
            <ul className="mx-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos
                    .filter((projeto) => projeto.allow_forking)
                    .map((projeto) => (
                        <TemplateProjeto key={projeto.id} {...projeto} />
                    ))}
            </ul>
        </>
    );
}