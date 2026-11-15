import type { Experience } from "@/utils/data/data";

export default function Card({ role, company, period, description, bullets, skills, duration } : Experience) {

  return (
    <section className="bg-indigo-100 border border-gray-300 rounded-lg p-6 shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{role}</h2>
      <h3 className="text-xl font-semibold mb-2">{company}</h3>
      <p className="text-gray-600 mb-4">{period}</p>
      <p className="text-gray-600 mb-4">{duration}</p>
      <p className="text-gray-800 text-center max-w-lg">{description}</p>
      {bullets && (
        <ul className="list-disc list-inside text-gray-700 mt-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="mb-2">
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {skills && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Skills:</h4>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li key={index} className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}