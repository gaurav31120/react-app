import Video from "./components/Video";
import "./App.css";
function App() {
  let videos = [
    {
      id: 1,
      title: "Python JS tutorial",
      views: "10k",
      time: "1 year ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      id: 2,
      title: "React JS tutorial",
      views: "100k",
      time: "1 year ago",
      channel: "gaurav",
      verified: false,
    },
    {
      id: 3,
      title: "Node Js tutoriail",
      views: "1M",
      time: "2 years ago",
      channel: "Coder Dost",
      verified: true,
    },
  ];
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
