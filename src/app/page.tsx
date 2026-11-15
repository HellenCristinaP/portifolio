import type { Metadata } from "next";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "Hellen Cristina | Desenvolvedora Front-End",
  description:
    "Olá! Sou Hellen Cristina, desenvolvedora Front-End com foco em React, Next.js e TypeScript. Estudante de ADS na UNIMES e formanda pela EBAC. Apaixonada por criar experiências web intuitivas e acessíveis.",
  openGraph: {
    title: "Hellen Cristina | Desenvolvedora Front-End",
    description:
      "Front-End Developer com foco em React, Next.js e TypeScript. Conheça meu portfólio de projetos e trajetória profissional.",
    url: "/",
  },
};

export default function Home() {

  return (
    <main className="bg-[url('/backgrounds/backgroundmainmobile.webp')] bg-cover md:bg-[url('/backgrounds/backgroundmaindesktop.webp')] flex flex-col min-h-dvh text-[#1E0041] relative px-10 py-5 md:text-center md:items-center md:flex-row md:gap-10">
      {
        // Modificar a imagem, conforme o tamanho do dispositivo, para que fique responsiva e não ultrapasse a tela
      }
      <div className="flex flex-row md:items-center gap-2 m-auto md:order-1">
        <div className="bg-[url('/me/me.webp')] bg-cover bg-center w-50 h-100 rounded-full border border-amber-400"></div>
        <div className="bg-[url('/me/mewitheyelinear.webp')] bg-cover bg-center w-50 h-100 rounded-full border border-amber-400"></div>
      </div>
      {/* <Image src="/me/me.webp" alt="Hellen Cristina" width={150} height={150} className="rounded-full m-auto my-5 md:order-2" />
      <Image src="/me/mewitheyelinear.webp" alt="Hellen Cristina" width={150} height={150} className="rounded-full m-auto my-5" /> */}

      <div className="flex flex-col text-center m-5 md:text-start md:ml-10">
        <p className="text-md font-semibold">Bem-vindo ao meu portfólio!</p>
        <h1 className="text-3xl font-bold">Hellen Cristina</h1>
        <p className="text-2xl font-bold">Desenvolvedora Front-End</p>
        <p className="text-md mt-5">
          Sou estudante de Análise e Desenvolvimento de Sistemas na UNIMES e estou me formando como Desenvolvedora Front-end pela EBAC.
          Gosto de criar experiências web intuitivas, responsivas e acessíveis, enquanto aprendo e utilizo tecnologias modernas.
          <br /><br />
          Fora da programação, sou apaixonada por livros, música, idiomas e viagens. Estou sempre em busca de novos aprendizados e aprimorar minhas habilidades pessoais e profissionais.
        </p>
      </div>
    </main>
  );
}
