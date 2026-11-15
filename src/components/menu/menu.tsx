'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Menu() {
    const pathname = usePathname();

    return (
        <nav className="flex direction-row justify-end bg-[#1E0041] p-5">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/sobre-mim" className={`hover:text-gray-400 ${pathname === '/sobre-mim' ? 'text-yellow-300' : 'text-white'}`}>
                        Sobre mim
                    </Link>
                </li>
                <li>
                    <Link href="/carreira" className={`hover:text-gray-400 ${pathname === '/carreira' ? 'text-yellow-300' : 'text-white'}`}>
                        Carreira
                    </Link>
                </li>
                <li>
                    <Link href="/projetos" className={`hover:text-gray-400 ${pathname === '/projetos' ? 'text-yellow-300' : 'text-white'}`}>
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href="/habilidades" className={`hover:text-gray-400 ${pathname === '/habilidades' ? 'text-yellow-300' : 'text-white'}`}>
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link href="/contato" className={`hover:text-gray-400 ${pathname === '/contato' ? 'text-blue-500' : 'text-white'}`}>
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
}