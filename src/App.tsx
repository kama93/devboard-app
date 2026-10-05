import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

import { useState } from 'react';
import type { Task, Priority } from './type';

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Initialize Phase 2 Architecture',
      description: 'Setup the modern Vite environment with the strict TypeScript compiler pass.',
      status: 'doing',
      priority: 'medium',
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: 'Master Component Type Contracts',
      description: 'Bind strict structural data interfaces cleanly onto functional child presentation props.',
      status: 'todo',
      priority: 'high',
      createdAt: Date.now(),
    }
  ]);

   const handleAddTask = (title: string, description: string, priority: Priority) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: 'todo',
      priority,
      createdAt: Date.now()
    };

    setTasks([...tasks, newTask]);
  };

  const handleStatusChange = (id: number) => {
    const updatedTasks = tasks.map((x) => {
      if (x.id === id) {
       const nextStatus: 'todo' | 'doing' | 'done' = 
          x.status === 'todo' ? 'doing' : 'done';

          return { ...x, status: nextStatus };
      }

      return x;
    })

    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>🎯 DevBoard Sprint Canvas</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Type-Safe Component Architecture</p>
      </header>

      <main>
        <h3>Active Working Items</h3>
        {tasks.length === 0 ? (
          <p style={{ color: '#999', fontStyle: 'italic' }}>No active tasks. Add one above!</p>
        ) : (
          tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onStatusChange={() => handleStatusChange(task.id)} 
            />
          ))
        )}
        <main>
        <h3>Add Item</h3>
        <TaskForm onAddTask={handleAddTask} />
        </main>
      </main>
    </div>
  )
}

export default App
