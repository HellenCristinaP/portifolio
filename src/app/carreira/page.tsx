import type { Metadata } from "next";

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
    <>
      <h1 className="text-4xl font-bold text-center mt-8">Carreira</h1>
    </>
  );
}