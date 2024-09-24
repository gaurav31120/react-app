import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import VideoDispatchContext from "../context/VideoDispatchContext";
// function Video(props)
function Video({
  id,
  title,
  channel = "gaurav",
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useContext(VideoDispatchContext);
  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => {
            dispatch({ type: "DELETE", payload: id });
          }}
        >
          X
        </button>
        <button
          className="edit"
          onClick={() => {
            editVideo(id);
          }}
        >
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Background img"
          />
        </div>
        <div className="title">{title}</div>

        <div className="channel">
          {channel} {verified ? "✅" : ""}{" "}
        </div>
        {/* {channelJSX} */}
        <div className="views">
          {views} <span>views.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Video;
