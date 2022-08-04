import React, { useEffect, useRef, useState } from "react";
import PlayIcon from "remixicon-react/PlayFillIcon";
import PauseIcon from "remixicon-react/PauseFillIcon";

export const VideoSection = () => {
  const videoElement = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? videoElement.current.play() : videoElement.current.pause();
  }, [playing, videoElement]);

  const togglePlay = () => {
    setPlaying((prevState) => !prevState);
  };

  return (
    <div className="video">
      <video
        src={process.env.PUBLIC_URL + "/assets/stock.webm"}
        className="w-full h-full object-cover"
        ref={videoElement}
        loop
      />
      <div className="video__play">
        <button
          onClick={togglePlay}
          className={`video__play--btn ${
            playing ? "video__play--btn-hide" : "video__play--btn-show"
          }`}
        >
          {!playing ? (
            <PlayIcon className="video__play--icon" />
          ) : (
            <PauseIcon className="video__play--icon" />
          )}
        </button>
      </div>
      <div className="video__controls"></div>
    </div>
  );
};
