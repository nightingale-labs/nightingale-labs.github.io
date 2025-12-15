import events from "../json/events.json";
import videos from "../json/videos.json";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : '';
};

const Events: React.FC<{}> = () => {
  return (
    <div
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
      className="mx-auto flex flex-col space-y-6 max-w-10xl"
    >
      <div className="max-w-screen-2xl mx-auto px-10">
        <h2 className="text-5xl mb-4">events</h2>
        <div className="border-2 border-black rounded p-4 bg-white">
          <div className="flex flex-col w-full space-y-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-100 rounded-lg px-10 py-4 border border-gray-200 mb-4"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-bold text-3xl block">{event.title}</span>
                  {event.headerImages && event.headerImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`header logo ${idx + 1}`}
                      style={{ height: "6em", width: "auto" }}
                      className="inline-block align-middle"
                    />
                  ))}
                </div>
                <span className="italic text-2xl mb-2 block">{event["date(s)"]}</span>
                <p
                  className="text-lg text-gray-800 text-left event-description"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                ></p>
              </div>
            ))}
          </div>

          {/* Video Talks Section */}
          <div className="flex flex-col w-full space-y-8 mt-8">
            <h3 className="text-3xl font-bold">Talks</h3>
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg px-10 py-2 border border-gray-200 flex flex-row items-center"
              >
                <div className="flex flex-col w-2/3 pr-6">
                  <span className="font-bold text-2xl mb-2">{video.title}</span>
                  <a
                    href={video.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 hover:underline"
                  >
                    {video.name}
                  </a>
                </div>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 flex-shrink-0"
                >
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.videoUrl)}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-auto rounded hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;