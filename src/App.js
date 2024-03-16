import Video from "./components/Video";
import "./App.css";
function App() {
  let obj = {
    title: "Python JS tutorial",
    views: "10k",
    time: "1 year ago",
    channel: "Coder Dost",
  };
  return (
    <>
      <div className="App">
        <div>Videos</div>
        <Video {...obj}></Video>
        {/* here, for calling object(name obj) we used {...obj} spread operator. */}
        <Video
          title="React JS tutorial"
          views="10k"
          time="1 year ago"
          channel="Coder Dost"
        ></Video>
        <Video
          title="Node Js tutoriail"
          views="100k"
          time="2 years ago"
        ></Video>
        <Video
          title="Mongo Js tutoriail"
          views="1000k"
          time="3 years ago"
          channel="Coder Masti"
        ></Video>
        {/* Here, we have send title props to Video component. */}
      </div>
    </>
  );
}
export default App;
