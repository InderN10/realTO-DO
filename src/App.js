
import './App.css';
import react, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Button } from './components/Button';

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
  const doneTasksCount = todo.filter(task => task.status === "DONE").length;

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
  function handleDeleteAllCompleted() {
    if (window.confirm("Are you sure to delete?")) {
      const newTodos = todo.filter((todo) => todo.status !== "DELETED");
      setTodo(newTodos);
    } else { }
  };
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
  };
  function handleFilterState(state) {
    setFilterState(state)
  };
  return (
    <div className="App">
      <div id='BODY'>
        <p id='title'>To do list</p>
        <div id='container'>
          <input placeholder='write here' value={inputValue} onChange={handleInputChange} id='writeTASK'></input>
          <Button handleChange={handleAddButton} id="addBUTTON" tittle="Add"/>
          {error.length > 1 && <div id='error'>{error}</div>}
        </div>
        <div id='containerCLASSIFYING'>
          <Button style={{ backgroundColor: filterState === "ALL" ? "#3C82F6" : "", color: filterState === "ALL" ? "white" : "" }} handleChange={() => handleFilterState("ALL")} tittle={"All"} id={"allTASKS"}/>
          <Button style={{ backgroundColor: filterState === "ACTIVE" ? "#3C82F6" : "", color: filterState === "ACTIVE" ? "white" : "" }} handleChange={() => handleFilterState("ACTIVE")} tittle={"Active"} id={"activeTASKS"}/>
          <Button style={{ backgroundColor: filterState === "DONE" ? "#3C82F6" : "", color: filterState === "DONE" ? "white" : "" }} handleChange={() => handleFilterState("DONE")} id="comletedTASKS" tittle={"Completed"} />
          <Button style={{ backgroundColor: filterState === "DELETED" ? "#3C82F6" : "", color: filterState === "DELETED" ? "white" : "" }} handleChange={() => handleFilterState("DELETED")} tittle="Trash" id="trash" />  
        </div>
        <div id='taskCOUNTAINER'>
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
              <Button handleChange={() => handleDeleteButton(todo.id)} id="deleteBUTT" tittle="Move to trash" />
            </div>
          }
          )}
        </div>

        <div id='taskCounter'>
          <div>
            <p id='p1'>Total of {todo.length}</p>
            <p id='p'>Completed Tasks: {doneTasksCount}</p>
          </div>
          <div id="deleteAllCompletedSection">
          <Button handleChange={handleDeleteAllCompleted} id="deleteAllCompletedButton" tittle="Clear Trash"/>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
