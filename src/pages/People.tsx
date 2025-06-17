import React from "react";
import researchTeam from "../json/researchTeam.json"
import advisoryBoard from "../json/advisoryBoard.json"

interface Person {
  id: number;
  name: string;
  imageUrl: string;
  affiliation: string;
  website?: string;
}

const People: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto Mono', monospace",
      }}
      className="mx-auto flex flex-col space-y-8"
    >
      <div>
        <h2 className="text-5xl mb-4">research team</h2>
        <div className="border-2 border-black bg-white rounded-lg mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {researchTeam.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 200 }} key={idx + 200} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-5xl mb-4">advisory board</h2>
        <div className="border-2 border-black bg-white rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
          {advisoryBoard.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 100 }} key={idx + 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PersonPortrait: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <a
      id="people-portrait"
      target="_blank"
      href={person.website}
      className="px-4 py-6 text-base flex flex-col items-center cursor-pointer hover:underline rounded-lg group"
      rel="noopener noreferrer"
    >
      <img
        id="people-portrait"
        src={person.imageUrl}
        alt={person.name}
        className="w-40 h-40 rounded-full object-cover cursor-pointer group-hover:outline group-hover:outline-4 group-hover:outline-[#ffcc04]"
      />
      <p className="mt-6 text-2xl font-semibold">{person.name}</p>
      <p className="text-lg">{person.affiliation}</p>
    </a>
  );
};

export default People;