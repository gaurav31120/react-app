import "./App.css";

function App() {
  {/* Declaring variable  */}
  let name = "react app"; 
  let className = "App-header";
  return (
    <div className="">
      <div className={className}>
        {/* css added */}
        {name}  {/* It will return name = react app*/}
      {/* Using variables inside return */} 
        <Demo></Demo>
        {/* Attach other functions by using tags inside parent function and 
      declaring the new function after the parent function */}
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">Demo</div>
    </div>
  );
}

export default App;
