import { useContext, useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";

function AddVideo({  editableVideo }) {
  const initialState = {
    time: "3 years ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);
  const dispatch = useVideoDispatch();
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialState);
    console.log(video);
  }
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    // console.log(video);
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    inputRef.current.focus()
    // inputRef.current.placeholder =""
    // "type here".split('').forEach((char,i) => {
    //   setTimeout(() => {
    //     console.log(char)
    //     inputRef.current.placeholder = inputRef.current.placeholder + char
    //   },200*i)
    // })
    console.log("effect");
  }, [editableVideo]);
  return (
    <>
      <form>
        <input
          ref={inputRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button
          onClick={handleSubmit}
          //   onClick={() => {
          // setVideos([
          //   ...videos,
          //   {
          //     id: videos.length + 1,
          //     title: "Demo Js tutoriail",
          //     views: "2M",
          //     time: "3 years ago",
          //     channel: "Coder Dost",
          //     verified: true,
          //   },
          // ]);
          //   }}
        >
          {editableVideo ? "Edit" : "Add "}Video
        </button>
      </form>
    </>
  );
}

export default AddVideo;
