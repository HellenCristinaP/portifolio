"use server";
import type { Metadata } from "next";
import { Octokit } from "@octokit/core";

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

import TemplateProjeto from "@/components/template/projeto";
import type { Repo } from "@/utils/types";

export default async function Projetos() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });
    
    let repos: Repo[] = [];
    let errorMessage = null;
    
    try {
        const response = await octokit.request('GET /user/repos', {
            headers: {
                'X-GitHub-Api-Version': '2026-03-10',
            },
        });
        repos = response.data as Repo[];
    } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
        errorMessage = "Não foi possível carregar os repositórios no momento. Verifique seu token ou tente novamente mais tarde.";
    }
    
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