import "./Video.css";
// function Video(props)
function Video({ id, title, channel = "gaurav", views, time, verified }) {
  // Here, we set a default value channel="gaurav". gaurav is default value.
  // let verified = true;

  // let channelJSX;
  // if(verified){
  //   channelJSX =  <div className="channel">{channel} ✅</div>
  // }
  // else {
  //   channelJSX =  <div className="channel">{channel} </div>
  // }

  // console.log("v", Video);
  return (
    <>
      <div className="container">
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
          {views} <span>.</span> {time}
        </div>
      </div>
    </>
  );
}
export default Video;
