import researchPreviews from "../json/researchPreviews.json";

const Research: React.FC<{}> = () => {
  return (
    <div
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
      className="mx-auto flex flex-col space-y-6 max-w-10xl"
    >
      <div className="max-w-screen-2xl mx-auto px-10">
        <h2 className="text-5xl mb-4">research</h2>
        <div className="border-2 border-black rounded p-4 bg-white">
          <div className="flex flex-col w-full space-y-8">
            {researchPreviews.map((o) => (
              <div
                key={o.imgSrc}
                className="bg-gray-100 rounded-lg px-10 py-4 border border-gray-200 mb-4"
              >
                <span className="font-bold text-3xl mb-2 block">{o.title}</span>
                <span className="italic text-2xl mb-2 block">{o.tagline}</span>
                <img
                  style={{ maxHeight: "16em", float: "left", marginRight: "1.5rem", marginBottom: "1rem", marginTop: "1rem" }}
                  className="rounded-sm"
                  src={o.imgSrc}
                  alt={o.imgAlt}
                />
                <p className="text-lg text-gray-800 text-left">{o.abstract}</p>
                <div style={{ clear: "both" }} />
                <div className="mt-4 mx-auto text-center w-3/4"><a  href={o.pdf_link} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline"> {o.ref + " "}<i>{o.publication_venue}</i> [pdf] </a></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Research;