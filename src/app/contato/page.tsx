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
            <fieldset className="flex flex-col items-center justify-center my-8">
              <form className="flex flex-col items-center justify-center max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-md">
                <legend className="text-lg font-semibold mb-4">Entre em contato comigo</legend>
                <p className="text-md text-center mb-4">
                  Deixe aqui seu feedback anonimamente ou entre em contato comigo pelas minhas redes sociais, como linkedin, github e instagram.
                </p>
                <label htmlFor="mensagem" className="text-md font-semibold mb-2">Sua mensagem:</label>
                <input type="text" id="mensagem" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button type="submit" className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Enviar
                </button>
              </form>
            </fieldset>

        </>
    );
}