import { useState } from "react";
import { Play } from "lucide-react";

export default function HeroSection() {
  const [showVideo1, setShowVideo1] = useState(true);
  const [showVideo2, setShowVideo2] = useState(true);

  return (
    <section className="w-full bg-cover bg-center py-6"
      style={{ backgroundImage: "url('/bg.jpg')" }}>

      <div className="max-w-6xl mx-auto px-4 space-y-6">
        
        {/* Video 1 */}
        <div className="rounded-xl overflow-hidden shadow-lg relative group h-[260px] md:h-[380px]">
          {!showVideo1 ? (
            <>
              <img
                src="https://images.unsplash.com/photo-1551817958-20204d6ab1ad"
                alt="video"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShowVideo1(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 hover:bg-white text-yellow-600 p-4 rounded-full shadow-md">
                  <Play size={32} fill="#C9A227" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              title="Video 1"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Video 2 */}
        <div className="rounded-xl overflow-hidden shadow-lg relative group h-[260px] md:h-[380px]">
          {!showVideo2 ? (
            <>
              <img
                src="https://img.freepik.com/free-vector/referral-program-concept-illustration_114360-7968.jpg"
                alt="Refer a Friend"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShowVideo2(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 hover:bg-white text-yellow-600 p-4 rounded-full shadow-md">
                  <Play size={32} fill="#C9A227" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              title="Video 2"
              allowFullScreen
            ></iframe>
          )}
        </div>

      </div>
    </section>
  );
}
