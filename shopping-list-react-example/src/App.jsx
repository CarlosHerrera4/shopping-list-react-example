import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask) return;
    // Cada tarea es un objeto con un id único y un texto
    const task = {
      id: Date.now(),
      text: newTask,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };


  const deleteTask = (taskId) => {
    // Filtra las tareas para eliminar la tarea específica por id
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <h1>Lista de la compra</h1>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          // onKeyPress={handleKeyPress}
          placeholder="Añade otro elemento a la lista"
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} {/* Asegúrate de renderizar task.text, no el objeto task completo */}
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
