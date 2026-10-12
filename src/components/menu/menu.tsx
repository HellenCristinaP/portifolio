import Link from "next/link";

export default function Menu() {
    return (
        <nav className="flex direction-row justify-end bg-[#1E0041] p-5">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/sobre-mim" className="text-white hover:text-gray-400">
                        Sobre mim
                    </Link>
                </li>
                <li>
                    <Link href="/carreira" className="text-white hover:text-gray-400">
                        Carreira
                    </Link>
                </li>
                <li>
                    <Link href="/projetos" className="text-white hover:text-gray-400">
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href="/habilidades" className="text-white hover:text-gray-400">
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link href="/contato" className="text-white hover:text-gray-400">
                        Contato
                    </Link>
                </li>
                <li>
                    <Link href="/Certificados" className="text-white hover:text-gray-400">
                        Certificados
                    </Link>
                </li>
            </ul>
        </nav>
    );
}