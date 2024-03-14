import Video from "./components/Video";
function App() {
  return (
    <>
      <div>hello</div>
      <Video title="React JS tutorial"></Video>
      <Video title="Node Js tutoriail"></Video>
      {/* Here, we have send title props to Video component. */}
    </>
  );
}
export default App;
