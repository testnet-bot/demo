'use client';

import React from 'react';
import styles from './TaskStats.module.css';

interface TaskStatsProps {
  total: number;
  completed: number;
}

const TaskStats: React.FC<TaskStatsProps> = ({ total, completed }) => {
  const pending = total - completed;

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statBox}>
        <div className={styles.number}>{total}</div>
        <div className={styles.label}>Total Tasks</div>
      </div>
      <div className={styles.statBox}>
        <div className={styles.numberCompleted}>{completed}</div>
        <div className={styles.label}>Completed</div>
      </div>
      <div className={styles.statBox}>
        <div className={styles.numberPending}>{pending}</div>
        <div className={styles.label}>Pending</div>
      </div>
    </div>
  );
};

export default TaskStats;
