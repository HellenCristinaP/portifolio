import Image from "next/image";

export default function Home() {

  return (
    <main className="flex flex-col items-start min-h-screen bg-[#F2E9FF] text-[#1E0041] relative px-10 py-5 md:text-center">
      {
        // Modificar a imagem, conforme o tamanho do dispositivo, para que fique responsiva e não ultrapasse a tela
      }
      <Image src="/profile.jpeg" alt="Hellen Cristina" width={150} height={150} className="rounded-full mt-8 m-auto md:absolute md:top-10 md:right-5 md:w-50" />
      <p className="text-md font-semibold">Bem-vindo ao meu portfólio!</p>
      <h1 className="text-3xl font-bold">Hellen Cristina</h1>
      <p className="text-2xl font-bold">Desenvolvedora Front-End</p>
      <p className="text-2xl font-bold">Especializada em React, Next.js e Tailwind CSS</p>
    </main>
  );
}
