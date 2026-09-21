import Image from "next/image";

export default function Home() {

  return (
    <main className="flex flex-col min-h-dvh bg-[#ede0ff] text-[#1E0041] relative px-10 py-5 md:text-center md:items-center md:flex-row md:gap-10">
      {
        // Modificar a imagem, conforme o tamanho do dispositivo, para que fique responsiva e não ultrapasse a tela
      }
      <Image src="/profile.jpeg" alt="Hellen Cristina" width={150} height={150} className="rounded-full m-auto my-5 md:m-5 md:order-2 md:w-85" />
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
