import type { Metadata } from "next";
import Card from "@/components/card/card";
import { portfolioData } from "@/utils/data/data"

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
          <div className="p-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:col-span-2">
            {portfolioData.career.map((item, index) => {
              return <Card key={index} role={item.role} company={item.company} period={item.period} description={item.description} bullets={item.bullets} skills={item.skills} duration={item.duration} />;
            })}
          </div>
        </div>
      </article>
    </main >
  );
}