import Image from "next/image";
import Link from "next/link";
import type { Repo } from "@/utils/types";

export default function ProjetosPage(projeto: Repo) {

    return (
        <li className="bg-[#1E0041] p-4 rounded-lg shadow-md mb-4">
            {projeto.homepage && (
                <Image
                    src={`https://api.microlink.io/?url=${encodeURIComponent(projeto.homepage)}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt="Favicon"
                    width={400}
                    height={400}
                    className="w-full"
                />
            )}
            <h2 className="text-xl font-bold text-white">{projeto.name.charAt(0).toUpperCase() + projeto.name.slice(1)}</h2>
            <p className="text-white">{projeto.description}</p>

            {projeto.homepage && (
                <Link
                    href={projeto.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block text-center"
                >
                    Visitar Site
                </Link>
            )}

            <Link
                href={projeto.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 cursor-pointer inline-block text-center"
            >
                Ver no GitHub
            </Link>
        </li>
    )
}