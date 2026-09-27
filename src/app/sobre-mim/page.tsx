import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Conheça Hellen Cristina: desenvolvedora Front-End apaixonada por tecnologia, livros, música e idiomas. Estudante de ADS na UNIMES, formanda pela EBAC, sempre em busca de aprendizado e crescimento profissional.",
  openGraph: {
    title: "Sobre Mim | Hellen Cristina",
    description:
      "Quem é Hellen Cristina? Desenvolvedora Front-End curiosa, determinada e em constante evolução. Saiba mais sobre minha trajetória e motivações.",
    url: "/sobre-mim",
  },
};


export default function SobreMim() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-8">Sobre Mim</h1>
        </>
    );
}