import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Event from '@/layout/TableEvent.js'
import {getLecturerProfile } from './api/api'
import{getPMProfile} from './api/api'
import{useState,useEffect} from 'react'
import{logout} from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    fetchData();
    fetchData1();
}, []);
const fetchData = async () => {
  try {
      const token = localStorage.getItem('id');
      console.log(token);
      const pm = await getPMProfile(token);
      setData(pm);
  } catch (error) {
      console.log('Error fetching data: ', error);
  }
};
const fetchData1 = async () => {
  try {
      const token = localStorage.getItem('id');
      console.log(token);
      const lecturer = await getLecturerProfile(token);
      setData(lecturer);
  } catch (error) {
      console.log('Error fetching data: ', error);
  }
};
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
          <title>Staff</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="APUlogo.png" />        
        </Head>
        <main className={styles.header}>                     
              <table>
                  <tbody>
                      <tr>
                          <td><a href="http://localhost:3000/HomeStu">
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
                          <td><a href="http://localhost:3000/HomeStu"><b className={styles.title1}>ApFYPCentre</b></a></td>                     
                          <td><a href="http://localhost:3000/ProfileStu" className={styles.button2}>Profile</a></td>
                          <td><a href="http://localhost:3000/SubStu" className={styles.button2}>Submission</a></td>                        
                          <td><a href="http://localhost:3000/StaffStu" className={styles.button3}>Staff</a></td>
                          <td> <br/></td>
                          <td><br/></td>
                          <td><a href="http://localhost:3000" className={styles.box6} onClick={handleLogout}><u>Logout</u></a></td>
                      </tr>
                  </tbody>                
              </table>                                                              
        </main>
        <div className={styles.content5}>
        <a href="http://localhost:3000/StaffStu">
          <div className={styles.button5}>
            Back 
          </div>
          </a>  <br />
      </div>
      <div className={styles.content6}>        
        
        <div className={styles.image3}></div>
        {data && (
          <div className={styles.box11a}>{data.name}<br /> {data.field_of_study} <br />{data.email}</div>
        )}
        
      </div>
      <Event /><br /><br />
        <br /><br /><br />
        <Footer />
        </>
  )
}