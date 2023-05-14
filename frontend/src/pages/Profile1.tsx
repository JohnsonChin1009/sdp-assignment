import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Event from '@/layout/TableEvent.js'
import {getStuLecProfile } from './api/api'
import{getStuPMProfile} from './api/api'
import{useState,useEffect} from 'react'
import{logout} from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })
interface Lecturer {
  id: string;
  name: string;
  email:string;
  field_of_study: string;
}
export default function Home() {
  const [data, setData] = useState<Lecturer | null>(null);
  const [data1, setData1] = useState([]);  
  useEffect(() => {
    
    fetchData();
    fetchData1();
    
}, []);
const fetchData = async () => {
  try {
      const token = localStorage.getItem('id');
      
      const pm = await getStuPMProfile(token);
      console.log(pm)
      setData(pm);
  } catch (error) {
      console.log('Error fetching data: ', error);
  }
};
const fetchData1 = async () => {
  try {
      const token = localStorage.getItem('lecturerid');      
      const lecturer = await getStuLecProfile(token);      
      setData1(lecturer);
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
          <><div className={styles.box11a} key={data.id}><h2>{data.name }</h2><br/>{data.id}<br /> {data.field_of_study} <br />{data.email }</div></>
        )}
        {data1 && (
          <><div className={styles.box11a} key={data1.id}><h2>{data1.name }</h2><br /> {data1.field_of_study} <br />{data1.email }</div></>
        )}
        
      </div>
      <Event /><br /><br />
        <br /><br /><br />
        <Footer />
        </>
  )
}