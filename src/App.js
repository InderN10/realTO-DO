
import './App.css';
import react, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
const todo = {
  text: "do homework",
  id: 1,
  status: "ACTIVE" | "COMPLETED"
}
function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("")
  const [filterState, setFilterState] = useState("ALL")
  function handleInputChange(event) {
    setInputValue(event.target.value);
  };
  function handleAddButton() {
    if (inputValue.length === 0) {
      setError("please enter task");
      return;
    } else {
      setError("")
      setTodo([...todo, { text: inputValue, id: uuidv4(), status: "ACTIVE" }]);
      setInputValue("");
    }
  };
  function handleCheckBox(id) {
    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: todo.status === "DONE" ? "ACTIVE" : "DONE" }
      }
      else {
        return todo;
      }
    });
    setTodo(newTodos);
    console.log(newTodos);

  };
  // function handleDeleteButton(id) {
  //   const newTodos = todo.map((todo) => todo.id !== id);
  //   if (todo.id === id) {
  //     return { ...todo, status: todo.status = "DELETED" }
  //   }
  //   setTodo(newTodos);
  // };
  function handleDeleteButton(id) {
    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: todo.status = "DELETED" }
      } else {
        return todo;
      }

    });
    setTodo(newTodos);
    console.log(newTodos);

  }

  function handleFilterState(state) {
    setFilterState(state)
  }

  // console.log(todo);


  return (
    <div className="App">
      <div id='BODY'>
        <p id='title'>To do list</p>
        <div id='container'>
          <input placeholder='write here' value={inputValue} onChange={handleInputChange} id='writeTASK'></input>
          <button onClick={handleAddButton} id='addBUTTON'>Add</button>
          {error.length > 1 && <div id='error'>{error}</div>}
        </div>
        <div id='containerCLASSIFYING'>
          <button onClick={() => handleFilterState("ALL")} id='allTASKS'>All</button>
          <button onClick={() => handleFilterState("ACTIVE")} id='activeTASKS'>Active</button>
          <button onClick={() => handleFilterState("DONE")} id='comletedTASKS'>Completed</button>
          <button onClick={() => handleFilterState("DELETED")} id='trash'>Trash</button>
        </div>
        {todo.filter((todo) => {
          if (filterState === "ALL" && todo.status !== "DELETED") {
            return true
          } else {
            return todo.status === filterState;
          }
        }).map((todo, index) => {
          return <div id='Tasks' key={index}>
              <div id='checkBox-text-container'>
                <input id='checkBox' type="checkbox" checked={todo.status === "DONE"} onChange={() => handleCheckBox(todo.id)} />
                <div id='taskNAME'> {todo.text} </div>
              </div>
              <button onClick={() => handleDeleteButton(todo.id)} id='deleteBUTT'>Delete</button>
          </div>
        }
        )}
        <p>No task yet</p>

      </div>
    </div>
  );
}

export default App;
