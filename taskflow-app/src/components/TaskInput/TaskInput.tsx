import React from 'react';
import { Plus } from 'lucide-react';
import styles from './TaskInput.module.css';

interface TaskInputProps {
  newTask: string;
  setNewTask: (text: string) => void;
  addTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ newTask, setNewTask, addTask }) => (
  <div className={styles.inputContainer}>
    <input
      type="text"
      value={newTask}
      onChange={e => setNewTask(e.target.value)}
      onKeyPress={e => e.key === 'Enter' && addTask()}
      placeholder="Add a new task..."
      className={styles.input}
    />
    <button onClick={addTask} className={styles.addBtn}>
      <Plus className={styles.icon} />
      <span>Add</span>
    </button>
  </div>
);

export default TaskInput;
