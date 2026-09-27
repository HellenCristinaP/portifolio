import { Octokit } from "@octokit/core";
import type { Repo } from "@/utils/types";

export default async function getProjectsGitHub(): Promise<{
    repos: Repo[];
    errorMessage: string | null;
}> {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });

    let repos: Repo[] = [];
    let errorMessage: string | null = null;

    try {
        const response = await octokit.request("GET /user/repos", {
            headers: {
                "X-GitHub-Api-Version": "2026-03-10",
            },
        });
        repos = response.data as Repo[];
    } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
        errorMessage =
            "Não foi possível carregar os repositórios no momento. Verifique seu token ou tente novamente mais tarde.";
    }

    return { repos, errorMessage };
}