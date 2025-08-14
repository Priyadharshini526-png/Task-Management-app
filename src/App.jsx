import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  const updateTask = (id, updatedData) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, ...updatedData } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow pt-6 pb-12 px-4">
        <Routes>
          <Route
            path="/"
            element={<Home tasks={tasks} deleteTask={deleteTask} />}
          />
          <Route
            path="/create"
            element={<CreateTask addTask={addTask} />}
          />
          <Route
            path="/edit/:id"
            element={<EditTask tasks={tasks} updateTask={updateTask} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
