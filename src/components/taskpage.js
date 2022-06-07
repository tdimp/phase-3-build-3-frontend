import React, { useState, useEffect } from 'react';
import TaskCard from './taskcard';


export default function TaskPage() {

  const url = 'http://localhost:9292'

  useEffect(() => {
    fetch(`${url}/tasks`)
      .then((r) => r.json())
      .then(setTasks)
  }, []);

  const [tasks, setTasks] = useState([]);

  return (
    <TaskCard>
      <h1>Hello World</h1>
    </TaskCard>
  )
}