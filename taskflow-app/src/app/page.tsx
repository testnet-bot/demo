'use client';
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import Dashboard from '../components/Dashboard/Dashboard';
import TaskInput from '../components/TaskInput/TaskInput';
import TaskStats from '../components/TaskStats/TaskStats';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

const Page: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  // login/logout handlers
  const handleLogin = (userData: { name: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setTasks([]);
  };

  // task management handlers
  const addTask = (text: string) => {
    if (!text.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTask = (id: number, text: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <ThemeToggle />

      {!isLoggedIn || !user ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-700 rounded-lg hover:bg-red-800 transition"
            >
              Logout
            </button>
          </div>

          <TaskInput onAddTask={addTask} />

          <TaskStats tasks={tasks} />

          <div className="grid gap-4">
            {tasks.map((task) => (
              <div key={task.id}>
                {/* Each TaskItem can handle edit/delete/toggle inside */}
                <Dashboard
                  task={task}
                  onDelete={deleteTask}
                  onToggleComplete={toggleComplete}
                  onEdit={editTask}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
