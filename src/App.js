// import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const [videos, setVideos] = useState(videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <>
      <div
        className="App"
        onClick={() => console.log("App")} //In console this line will get printed whenever any below div class will be called. It will act like parent console which will be called on every click anywhere.. in this page.
        // To stop this we will use Event Propogation
      >
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList
          dispatch={dispatch}
          editVideo={editVideo}
          videos={videos}
        ></VideoList>
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

       
      </div>
    </>
  );
}
export default App;
