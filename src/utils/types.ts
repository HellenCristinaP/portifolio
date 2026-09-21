export interface Repo {
    id: number | bigint;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string;
    allow_forking: boolean;
}