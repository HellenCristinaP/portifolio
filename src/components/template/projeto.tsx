import Link from "next/link";
import type { Project } from "@/utils/data/data";

export default function ProjetosPage(projeto: Project) {

    return (
        <li className="flex flex-col items-center text-center space-y-3 border border-purple-900 bg-purple-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-max overflow-hidden">
            <h2 className="text-base sm:text-lg font-semibold text-[#1b073a] hover:text-purple-700 p-4">{projeto.title.charAt(0).toUpperCase() + projeto.title.slice(1)}</h2>
            <p className="text-xs sm:text-sm text-[#46355d] leading-relaxed max-w-md py-1 px-4">{projeto.description}</p>
            {projeto.techniques && (
                <ul className="flex flex-wrap mt-2 px-5">
                    {projeto.techniques.map((technique, index) => (
                        <li
                            key={index}
                            className="bg-[#46355d] text-purple-50 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                        >
                            {technique}
                        </li>
                    ))}
                </ul>
            )}

            {projeto.technologies && (
                <ul className="flex flex-wrap mt-2 px-5">
                    {projeto.technologies.map((technology, index) => (
                        <li
                            key={index}
                            className="bg-[#46355d] text-purple-50 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>
            )}

            <div className="bg-[#1c083c] text-white flex items-center justify-around py-2 px-2 text-sm font-bold tracking-wide  w-full">

                {projeto.liveUrl && (
                    <Link
                        href={projeto.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-purple-100 hover:text-[#facc15] transition-colors py-2 px-3 hover:bg-white/5"
                    >
                        Ver online
                    </Link>
                )}

                <Link
                    href={projeto.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-purple-100 hover:text-[#facc15] transition-colors py-2 px-3 hover:bg-white/5"
                >
                    Ver código
                </Link>
            </div>
        </li>
    )
}