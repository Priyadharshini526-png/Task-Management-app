import React from 'react';
import TaskTable from './TaskTable';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

const Home = ({ tasks, deleteTask }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Task List</h1>
        <Link
          to="/create"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          Create Task
        </Link>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <TaskTable tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Home;