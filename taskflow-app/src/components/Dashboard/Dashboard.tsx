import React, { useState } from 'react';
import TaskStats from '../TaskStats/TaskStats';
import TaskInput from '../TaskInput/TaskInput';
import TaskItem from '../TaskItem/TaskItem';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { LogOut } from 'lucide-react';
import styles from './Dashboard.module.css';

interface DashboardProps {
  user: { name: string };
  onLogout: () => void;
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const deleteTask = (id: number) => setTasks(tasks.filter(t => t.id !== id));
  const toggleComplete = (id: number) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editText } : t));
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => { setEditingId(null); setEditText(''); };
  const totalCount = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>TaskFlow</h1>
        <div className={styles.headerRight}>
          <ThemeToggle />
          <button className={styles.logoutBtn} onClick={onLogout}>
            <LogOut className={styles.logoutIcon} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className={styles.mainContent}>
        <TaskStats total={totalCount} completed={completedCount} />
        <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        <div className={styles.taskList}>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              editingId={editingId}
              editText={editText}
              setEditText={setEditText}
              startEdit={startEdit}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
