import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Table from '@/layout/TableSup1.js'
const inter = Inter({ subsets: ['latin'] })
import{logout} from '@/pages/api/api'

import { useState } from 'react';




export default function Home() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogout = async()=>{
    try{
      await logout();
    }catch(error){
      console.error('Error.logging out: ', error);
    }
  };
  
  return (
    <>
      <Head>
        <title>Student</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="APUlogo.png" />        
      </Head>
      <main className={styles.header}>                     
            <table>
                <tbody>
                    <tr>
                        <td><a href="http://localhost:3000/HomeSupervisor">
                            <Image
                            src="/APUlogo.png"
                            alt="APU Logo"
                            className={styles.vercelLogo}
                            width={50}
                            height={50}
                            priority            
                            />
                        </a>
                        </td>
                        <td><a href="http://localhost:3000/HomeSupervisor"><b className={styles.title4}>ApFYPCentre</b></a></td>                     
                        <td><a href="http://localhost:3000/ProfileSup" className={styles.button2}>Profile</a></td>
                        <td><a href="http://localhost:3000/StuSup" className={styles.button3}>Student</a></td>                                                
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box6}  onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                              
      </main>            
      <div className={styles.content5}>
        <a href="http://localhost:3000/HomeSupervisor">
        <div className={styles.button5}>
          Back 
        </div>
        </a>
      </div>                 
       <br /><br /><br /><br/>
       <Table />
      <div className={styles.content6}>      </div>                                           
      <br /><br /><br />
      <Footer />
      </>
  )
}