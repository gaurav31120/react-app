// import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
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

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
    console.log(id);
  }
  return (
    <>
      <div
        className="App"
        onClick={() => console.log("App")} //In console this line will get printed whenever any below div class will be called. It will act like parent console which will be called on every click anywhere.. in this page.
        // To stop this we will use Event Propogation
      >
        <AddVideo addVideos={addVideos}></AddVideo>
        <VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
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
