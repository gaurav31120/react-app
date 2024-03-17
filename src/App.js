import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
function App() {
  
  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          ></Video>
        ))}

        {/* Here, we have send title props to Video component. */}
      </div>
    </>
  );
}
export default App;
