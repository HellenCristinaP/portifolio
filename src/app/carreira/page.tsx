import type { Metadata } from "next";
import Card from "@/components/card/card";

export const metadata: Metadata = {
  title: "Carreira",
  description:
    "Trajetória profissional de Hellen Cristina: formação em Análise e Desenvolvimento de Sistemas (UNIMES), curso de Front-End pela EBAC e experiências que moldaram sua jornada como desenvolvedora.",
  openGraph: {
    title: "Carreira | Hellen Cristina",
    description:
      "Saiba mais sobre a jornada de Hellen Cristina no desenvolvimento Front-End: formação, experiências e metas profissionais.",
    url: "/carreira",
  },
};

export default function Carreira() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5 text-indigo-950">
      <h1 className="text-4xl font-bold text-center mt-8">Carreira</h1>
      <article className="px-4 py-6 max-w-5xl w-full">
        <div className="lg:grid md:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-1 lg:w-1/2">
            <h2>Última experiência profissional</h2>
            <Card cargo="Auxiliar de Escritório" empresa="Empresa X" periodo="2020 - Presente" descricao="Atuo como desenvolvedora Front-End, criando interfaces modernas e responsivas para diversos projetos." />
          </div>
          <div className="p-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:col-span-2">
            <Card cargo="Desenvolvedora Front-End" empresa="Empresa X" periodo="2020 - Presente" descricao="Atuo como desenvolvedora Front-End, criando interfaces modernas e responsivas para diversos projetos." />
            <Card cargo="Desenvolvedora Front-End" empresa="Empresa X" periodo="2020 - Presente" descricao="Atuo como desenvolvedora Front-End, criando interfaces modernas e responsivas para diversos projetos." />
            <Card cargo="Desenvolvedora Front-End" empresa="Empresa X" periodo="2020 - Presente" descricao="Atuo como desenvolvedora Front-End, criando interfaces modernas e responsivas para diversos projetos." />
          </div>
        </div>
      </article>
    </main >
  );
}