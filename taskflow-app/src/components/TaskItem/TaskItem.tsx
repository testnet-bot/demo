import React from 'react';
import { Check, X, Trash2, Edit2 } from 'lucide-react';
import styles from './TaskItem.module.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TaskItemProps {
  task: Task;
  editingId: number | null;
  editText: string;
  setEditText: (text: string) => void;
  startEdit: (task: Task) => void;
  saveEdit: (id: number) => void;
  cancelEdit: () => void;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  cancelEdit,
  toggleComplete,
  deleteTask,
}) => (
  <div className={styles.taskItem}>
    <button
      onClick={() => toggleComplete(task.id)}
      className={`${styles.completeBtn} ${task.completed ? styles.completed : ''}`}
    >
      {task.completed && <Check className={styles.checkIcon} />}
    </button>

    {editingId === task.id ? (
      <input
        type="text"
        value={editText}
        onChange={e => setEditText(e.target.value)}
        className={styles.editInput}
        autoFocus
      />
    ) : (
      <span className={`${styles.taskText} ${task.completed ? styles.completedText : ''}`}>
        {task.text}
      </span>
    )}

    <div className={styles.actions}>
      {editingId === task.id ? (
        <>
          <button onClick={() => saveEdit(task.id)} className={styles.saveBtn}><Check /></button>
          <button onClick={cancelEdit} className={styles.cancelBtn}><X /></button>
        </>
      ) : (
        <>
          <button onClick={() => startEdit(task)} className={styles.editBtn}><Edit2 /></button>
          <button onClick={() => deleteTask(task.id)} className={styles.deleteBtn}><Trash2 /></button>
        </>
      )}
    </div>
  </div>
);

export default TaskItem;
