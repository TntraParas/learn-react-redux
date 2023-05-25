import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AppDispathch, RootState } from './redux/store'
import { useState } from 'react';
import { addTodo, removeTodo, setTodoStatus } from './redux/todoSlice';

function App() {

  const [todoDescription, setTodoDescription] = useState("");
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispathch>();

  return (
    <>
      <h1>Redux todo app</h1>
      <input name="taskInput" type="text" onChange={(e) => setTodoDescription(e.target.value)} value={todoDescription} />
      <button
        onClick={ () => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >Add item</button>
      <div>
        <ol>
          {/* here 'i' is important as we have implemented id of the todo to be the length of array so i is must */}
          {todoList.map((todo,i) => 
            <li key={i}>{todo.description}
              <input type="checkbox" checked={todo.completed} onChange={() => dispatch(setTodoStatus({completed: !todo.completed, id: i}))}/>
              <button onClick={ () => dispatch(removeTodo(i))}>Remove</button>
            </li> )}
        </ol>
      </div>
    </>
  );
}

export default App
