import { useState } from "react";
import ReactPlayer from "react-player";

const Home = () => {
  const [shouldReplay, setShouldReplay] = useState(true);

  const handleVideoEnded = () => {
    setShouldReplay(false);
  };
  return (
    <div>
      {/* banner video */}
      <div>
        <ReactPlayer
          url="banner.mp4"
          playing={shouldReplay}
          loop={!shouldReplay}
          width="100%"
          height="100%"
          onEnded={handleVideoEnded}
        />
      </div>
    </div>
  );
};

export default Home;
