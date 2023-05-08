import Head from 'next/head'
import {Roboto} from 'next/font/google'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/layout/Header.js'
import Footer from '@/layout/Footer.js'
import {useState} from 'react'



const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight:'300',subsets:['latin']})
export default function Login() {
  const[user, setUser] = useState('');
  const[password, setPassword] = useState('');
  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Login request failed');
      }
    }
    catch (error)
      {
        console.error('An error occured during the login request: ', error)
      }
  }
  
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="APUlogo.png" />        
      </Head>
      <Header />
      <div className={styles.main}>
        <div className={styles.center}>
          <h1>Login</h1>
        </div>
        <div className={styles.box1}>
            <div className={styles.box2}>
              <form onSubmit={submitForm} className={roboto.className}>
                TP Number: <br />
                <input type="text" required  value ={user} onChange={(event)=>setUser(event.target.value)}name="tp"/><br /><br />
                Password: <br />
                <input type="password"required value={password} onChange={(event)=>setPassword(event.target.value)} name="password"/><br /><br />
                <button type="submit" value="login" name="login" className={styles.box2button}>LOGIN</button>
              </form>
            </div>
        </div>
      </div><br /><br /><br />
      <Footer />
      </>
  )
}