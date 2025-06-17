import researchPreviews from "../json/researchPreviews.json";

const Research: React.FC<{}> = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto Mono', monospace",
      }}
      className="mx-auto flex flex-col space-y-6 max-w-10xl"
    >
      <div>
        <h2 className="text-4xl mb-2">research</h2>
        <div className="outline rounded p-4 bg-white">
          <div className="flex flex-col w-full space-y-8">
            {researchPreviews.map((o) => (
              <div
                key={o.imgSrc}
                className="bg-gray-100 rounded-lg p-4 border border-gray-200 flex flex-col items-center"
              >
                <img
                  style={{ maxHeight: "20em" }}
                  className="rounded-sm mb-4"
                  src={o.imgSrc}
                  alt={o.imgAlt}
                />
                <p className="text-base text-gray-800 text-left">{o.abstract}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;