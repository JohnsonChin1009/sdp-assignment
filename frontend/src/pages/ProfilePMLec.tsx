import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Table from '@/layout/TableStu3.js'
import { getPMLecturerProfile } from './api/api'

import { useEffect, useState } from 'react'

interface LecturerData {
  id: string;
  name: string;
  email: string;
  field_of_study: string;
}


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [lecturer, setData] = useState<LecturerData | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('id');
                console.log(token);
                const student = await getPMLecturerProfile(token);
                setData(student);
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);
  return (
    <>    
      <Head>
        <title>Staff</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="APUlogo.png" />        
      </Head>
      <main className={styles.header}>                     
            <table>
                <tbody>
                    <tr>
                        <td><a href="http://localhost:3000/HomePM">
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
                        <td><a href="http://localhost:3000/HomePM"><b className={styles.title1}>ApFYPCentre</b></a></td>                     
                        <td><a href="http://localhost:3000/ProfilePM" className={styles.button1}>Profile</a></td>
                        <td><a href="http://localhost:3000/StudentPM" className={styles.button2}>Student</a></td>
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button4}>Lecturer</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button2}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                          
      </main>       
      <div className={styles.content5}>
        <a href="http://localhost:3000/StaffPM">
        <div className={styles.button5}>
          Back 
        </div>
        </a>
      </div>  
      
      <div className={styles.image3}></div>
      {lecturer && (
      <>
      <div className={styles.box11a} >{lecturer.name}<br /> {lecturer.field_of_study} <br />{lecturer.email}</div>
      </>
        )}
                                
      <br /><br /><br />    <br /><br /><br />                          
      
      <Table />                                      
             
      <br /><br /><br />
      <Footer />
      </>
  )
}