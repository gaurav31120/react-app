import "./Video.css";

// function Video(props)
function Video({ title, channel = "gaurav", views, time }) {
  // Here, we set a default value channel="gaurav". gaurav is default value.
  console.log("v", Video);

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://loremflickr.com/140/160" alt="Background img" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
      </div>
    </>
  );
}

export default Video;
