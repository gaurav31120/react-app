import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* css added */}
        Hello World
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
