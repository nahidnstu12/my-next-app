import Link from 'next/link';
import { useRef, useState } from 'react';
import styles from '../styles/Auth.module.css';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [msg, setMsg] = useState('');

  async function handleLogin() {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const json = await res.json();
    setMsg(json);
    // console.log(json)
  }

  return (
    <div className={styles.container}>
      <h1>Login Form</h1>
      {/* <form className={styles.form} method="post"> */}
      <input
        type='text'
        placeholder='place your email'
        ref={emailRef}
        className={styles.inputField}
      />
      <input
        type='password'
        placeholder='password'
        ref={passwordRef}
        className={styles.inputField}
      />
      <button className={styles.submit} onClick={handleLogin} type='submit'>
        Login
      </button>
      <Link href="/signup" ><a className={styles.change}>Signup First</a></Link>
      {/* </form> */}
      <div className={styles.info}>
        Info:
        <span>{JSON.stringify(msg)}</span>
      </div>
    </div>
  );
}
