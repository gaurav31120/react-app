import { useEffect, useState } from "react";
import "./AddVideo.css";

function AddVideo({ addVideos,updateVideo, editableVideo }) {
  const initialState = {
    time: "3 years ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
        updateVideo(video)
    } else {
      addVideos(video);
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
    console.log("effect");
  }, [editableVideo]);
  return (
    <>
      <form>
        <input
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
