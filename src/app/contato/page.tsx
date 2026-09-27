import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Hellen Cristina — desenvolvedora Front-End disponível para oportunidades de emprego, freelas e colaborações. Conecte-se via LinkedIn, GitHub ou e-mail.",
  openGraph: {
    title: "Contato | Hellen Cristina",
    description:
      "Quer contratar ou colaborar? Entre em contato com Hellen Cristina, Front-End Developer. Disponível para novas oportunidades.",
    url: "/contato",
  },
};

export default function Contato() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-8">Contato</h1>
        </>
    );
}