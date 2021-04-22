import { useRef, useState } from 'react';
import styles from '../styles/Auth.module.css';
import Link from 'next/link';

export default function Signup() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [msg, setMsg] = useState([]);

  async function handleSignUp() {
    const res = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current.value,
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
      <h1>Sign Up Form</h1>
      {/* <form className={styles.form}> */}
      <input
        type='text'
        placeholder='place your name'
        ref={nameRef}
        className={styles.inputField}
      />
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
      <button className={styles.submit} onClick={handleSignUp}>
        Signup
      </button>
      <Link href="/login" ><a className={styles.change}>Login First</a></Link>
      {/* </form> */}
      <div className={styles.info}>
        Info:
        {Object.keys(msg).length !== 0
          ? msg.map((person, i) => (
              <p key={i}>
                {person.name} + {person.email}
              </p>
            ))
          : 'no user'}
      </div>
    </div>
  );
}
