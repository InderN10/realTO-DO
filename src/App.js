
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='BODY'>
        <p id='title'>To do list</p>
        <div id='containerCLASSIFYING'>
          <input id='writeTASK'></input>
          <button id='addBUTTON'>Add</button>
        </div>
        <div id='container'>
          <button id='allTASKS'>All</button>
          <button id='activeTASKS'>Active</button>
          <button id='comletedTASKS'>Completed</button>
        </div>
        <p>No task yet</p>

      </div>
    </div>
  );
}

export default App;
