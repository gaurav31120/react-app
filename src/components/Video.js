import "./Video.css";

function Video() {
  let topic = "React JS";
  let bg = "dark";
  return (
    <>
      <img src="https://loremflickr.com/140/160" alt="Background img" />
      <div className={bg}>{topic} Tutorial - Components</div>
    </>
  );
}

export default Video;
