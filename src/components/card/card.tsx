export default function Card({ cargo, empresa, periodo, descricao } : { cargo: string; empresa: string; periodo: string; descricao: string }) {

  return (
    <section className="bg-indigo-100 border border-gray-300 rounded-lg p-6 shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{cargo}</h2>
      <h3 className="text-xl font-semibold mb-2">{empresa}</h3>
      <p className="text-gray-600 mb-4">{periodo}</p>
      <p className="text-gray-800 text-center max-w-lg">{descricao}</p>
    </section>
  );
}