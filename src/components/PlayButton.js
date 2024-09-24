import { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";
function PlayButton({ message, children, onPlay, onPause }) {
  // let playing = false;
  const theme = useContext(ThemeContext)
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(message)
    // onClick();
    console.log(e);
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    // playing = !playing;
    setPlaying(!playing);
  }
  return (
    // <button onClick={()=>console.log('play')}>Play</button>

    <button className={theme} onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}

export default PlayButton;
