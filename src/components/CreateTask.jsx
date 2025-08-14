import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateTask = ({ addTask }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    priority: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    if (!formData.status) newErrors.status = 'Status is required';
    if (!formData.priority) newErrors.priority = 'Priority is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newTask = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      addTask(newTask);
      navigate('/');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleClear = () => {
    setFormData({
      title: '',
      description: '',
      status: '',
      priority: ''
    });
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Task</h1>
        <p className="text-sm text-gray-600 mt-1">Add a new task to your list</p>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Task Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter task title"
            />
            {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter task description"
            />
            {errors.description && (
              <p className="text-sm text-red-600 mt-1">{errors.description}</p>
            )}
          </div>

          {/* Status & Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.status ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              {errors.status && <p className="text-sm text-red-600 mt-1">{errors.status}</p>}
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Priority *
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.priority ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errors.priority && <p className="text-sm text-red-600 mt-1">{errors.priority}</p>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
               type="submit"
               className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-400 bg-blue-600 text-white font-medium rounde
               
               
               
               
               
               
               
               
               
               
               d-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
              
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
             className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-400 bg-white text-black font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors" 
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleCancel}
            className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-400 bg-white text-black font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors" 
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;