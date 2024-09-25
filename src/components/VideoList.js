import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/video.json?key=3d850c00";

  const videos = useVideos();
  // const [videos, setVideos] = useState([]);
  const dispatch = useVideoDispatch();

  async function handleClick (){
    const res = await axios.get(url);
    console.log('getVideos', res.data)
    dispatch({type:'LOAD',payload:res.data})
   }

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      console.log("get videos", res.data);
      dispatch({ type: "LOAD", payload: res.data });
    }
    getVideos();
  }, [dispatch]);

  const play = useCallback(() => console.log("Playing.."),[])
  const pause = useCallback(() => console.log("Playing.."),[])

  const memoButton = useMemo(() => {
    <PlayButton
            onPlay={play}
            onPause={pause}
          >
            {/* {video.title} */}
            Play
          </PlayButton>
  },[pause,play])

  return (
    <>
      {videos.map((video) => (
        <Video
          verified={video.verified}
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          editVideo={editVideo}
        >
          {memoButton}
          
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </>
  );
}

export default VideoList;
