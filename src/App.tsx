import TaskCard from './components/TaskCard';

import { useState } from 'react';
import type { Task } from './type';

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Initialize Phase 2 Architecture',
      description: 'Setup the modern Vite environment with the strict TypeScript compiler pass.',
      status: 'doing',
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: 'Master Component Type Contracts',
      description: 'Bind strict structural data interfaces cleanly onto functional child presentation props.',
      status: 'todo',
      createdAt: Date.now(),
    }
  ]);

    const handleStatusChange = (id: number, currentStatus: string) => {
    console.log(`Task identified by ID: ${id} requested a status adjustment from: ${currentStatus}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>🎯 DevBoard Sprint Canvas</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Type-Safe Component Architecture</p>
      </header>

      <main>
        <h3>Active Working Items</h3>
        {tasks.map((task) => (
          // 5. Render the child component, feeding the data and the callback downward
          <TaskCard 
            key={task.id} 
            task={task} 
            onStatusChange={handleStatusChange} 
          />
        ))}
      </main>
    </div>
  )
}

export default App
