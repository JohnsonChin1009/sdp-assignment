import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/layout/Header.js'
import Footer from '@/layout/Footer.js'
import {useState, useEffect} from 'react'
import { login } from '../pages/api/api.js'
import { useRouter } from 'next/router.js'



const inter = Inter({ subsets: ['latin'] })


export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role_type, setRoleType] = useState('');
  const[message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const MAX_ATTEMPTS = 3; // Define the maximum number of login attempts
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  // Update the loginAttempts count when there's an invalid input
  const handleInvalidInput = () => {
    setLoginAttempts(loginAttempts + 1);
    setShowErrorMessage(true);    
  };
  
  

   const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await login(email, password);
      const { token, role_type } = response;

      setRoleType(role_type);
      console.log('Login successful:', response);
      setMessage('Successful, Loading...')
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }

      switch (role_type) { 
        case 'projectmanager':          
          router.push('/HomePM');
          break;
        case 'lecturer':
          router.push('/HomeSupervisor');
          break;
        case 'student':
          router.push('/HomeStu');
          break;
        default:
          router.push('/login');

      }

    } catch (error) {
      // Handle error during login here
      console.error('An error occurred during the login request:', error);
      setError(true);
      setErrorMessage('Invalid email or password')

    }
  };
  
  
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
          <div className={styles.word4}><b>Login</b></div>
        </div>
        <div className={styles.box1}>
            <div className={styles.box2}>
              <form onSubmit={submitForm} className={styles.word3}>
                Email <br />
                <input type="text" required  value ={email} onChange={(event)=>setEmail(event.target.value)}name="email"/><br /><br />
                Password <br />
                <input type="password"required value={password} onChange={(event)=>setPassword(event.target.value)} name="password" /><br /><br />                   
                <button type="submit" value="login" name="login" className={styles.box2button} onClick={handleInvalidInput}>LOGIN</button>
              </form> <br />
              {loginAttempts < MAX_ATTEMPTS && (
  <>
              {message ? <p><i>Successful Login, Loading...</i></p>: null}
              {showErrorMessage && error ? <p className={styles.word5}><i>**{errorMessage}</i></p>: null}</>)}
            </div>
        </div>
      </div><br /><br /><br />
      <Footer />
      </>
  )
}