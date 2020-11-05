import React, { useState } from 'react'

import Form from './components/Form/Form'
import List from './components/List/List'

import './styles.css'

function App() {
  const [tasks, setTask] = useState([])

  const addtask = (task) => {
    const newTask = {
      task,
      isComplete: false
    }

    setTask([...tasks, newTask])
  }

  const deleteTask = (index) => {
    const itensTask = [...tasks]
    itensTask.splice(index, 1)
    setTask(itensTask)
}

const toggleComplete = index => {
  const newTasks = [...tasks]
  newTasks[index].isComplete = !newTasks[index].isComplete
  setTask(newTasks)
}

  return (
    <div className="App">
      <h1>Add Tasks</h1>
      <Form onSave={addtask} />
      <h3>Tasks List</h3>
      <List
      tasks={tasks}
      deleteTask={deleteTask}
      completeTask={toggleComplete}
      />
    </div>
  );
}

export default App;