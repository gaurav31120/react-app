import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos, deleteVideo, editVideo }) {
  return (
    <>
      {videos.map((video) => (
        <Video
          verified={true}
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;
