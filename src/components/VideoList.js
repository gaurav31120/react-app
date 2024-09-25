import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from "axios";
import { useState } from "react";

function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/video.json?key=3d850c00";

  // const videos = useVideos();
  const [videos, setVideos] = useState([]);

  async function handleClick() {
    const res = await axios.get(url);
    console.log("get videos", res.data);
    setVideos(res.data);
  }
  return (
    <>
      {videos.map((video) => (
        <Video
          verified={true}
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </>
  );
}

export default VideoList;
