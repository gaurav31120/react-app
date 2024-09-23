import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([
      ...videos,
      { ...video, id: videos.length + 1 },
      // {
      //   id: videos.length + 1,
      //   title: "Demo Js tutoriail",
      //   views: "2M",
      //   time: "3 years ago",
      //   channel: "Coder Dost",
      //   verified: true,
      // },
    ]);
  }
  return (
    <>
      <div
        className="App"
        onClick={() => console.log("App")} //In console this line will get printed whenever any below div class will be called. It will act like parent console which will be called on every click anywhere.. in this page.
        // To stop this we will use Event Propogation
      >
        <AddVideo addVideos={addVideos}></AddVideo>
        {/* <button
            onClick={() => {
              setVideos([
                ...videos,
                {
                  id: videos.length + 1,
                  title: "Demo Js tutoriail",
                  views: "2M",
                  time: "3 years ago",
                  channel: "Coder Dost",
                  verified: true,
                },
              ]);
            }}
          >
            Add Video
          </button> */}

        {videos.map((video) => (
          <Video
            verified={true}
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
          >
            <PlayButton
              onPlay={() => console.log("Playing..", video.title)}
              onPause={() => console.log("Paused..", video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
        {/* <Video {...videos}></Video> */}
        {/* here, for calling object(name obj) we used {...obj} spread operator. */}
        {/* <Video  verified={false}title="React JS tutorial" views="10k" time="1 year ago" channel="Coder Dost"></Video>
      <Video  verified={false}title="Node Js tutoriail" views="100k" time="2 years ago" ></Video> */}
        {/* <Video  verified={true}title="Mongo Js tutoriail" views="1000k" time="3 years ago" channel="Coder Masti"></Video>  */}
        {/*  Here, we have send title props to Video component. */}

        {/* <div style={{ clear: "both" }}> */}
        {/* <PlayButton message="play-message" onPlay={()=>console.log('Playy')} onPause ={()=>console.log('Pause')}>Play</PlayButton> */}
        {/* <PlayButton  message="pause-message" onClick={()=>alert('Pauseeeee')}>Pause</PlayButton> */}
        {/* This onClick is not using to click the buttons but this onClick only heps to pass the function. */}
        {/* </div> */}
        {/* <Counter></Counter> */}
      </div>
    </>
  );
}
export default App;
