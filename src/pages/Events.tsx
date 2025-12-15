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
          <div className="flex flex-col w-full space-y-2 mt-8">
            <h3 className="text-2xl font-bold">highlights & edited recordings </h3>
            {videos.map((video, index) => (
              
              <div
                key={index}
                className="bg-gray-100 rounded-lg px-10 py-2 border border-gray-200 flex flex-row items-center hover:border-blue-500 hover:border-2 transition-all"
              >
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/4 flex-shrink-0 relative group"
                >
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.videoUrl)}/mqdefault.jpg`}
                    alt={video.talkTitle}
                    className="w-full h-auto rounded"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded">
                    <svg
                      className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
                <div className="flex flex-col w-2/3 pr-6 ml-8">
                  <span className="font-bold text-xl mb-1">{video.talkTitle}</span>
                  <a
                    href={video.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 hover:underline"
                  >
                    {video.speaker}
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;