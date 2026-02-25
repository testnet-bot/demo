import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import { Check } from 'lucide-react';

interface AuthFormProps {
  onLogin: (user: { name: string; email: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { name: name || email.split('@')[0], email };
    onLogin(userData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Check className="w-8 h-8 text-white" />
        </div>
        <h1 className={styles.title}>TaskFlow</h1>
        <p className={styles.subtitle}>Manage your tasks efficiently</p>

        <div className={styles.toggleButtons}>
          <button
            className={isLogin ? styles.activeBtn : styles.inactiveBtn}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? styles.activeBtn : styles.inactiveBtn}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        <p className={styles.demoText}>Demo Mode • No real authentication required</p>
      </div>
    </div>
  );
};

export default AuthForm;
