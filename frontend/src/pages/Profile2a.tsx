import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import { useEffect, useState } from 'react'
import { getStudentProfile } from '@/pages/api/api';
import { UpdateProfileStu } from '@/pages/api/api';
import{logout} from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState([]);
  const [newValue, setNewValue] = useState('');
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async()=>{
    try {
      const token = localStorage.getItem('token'); //Retrieving token from local storage)
      const student = await getStudentProfile(token);
      console.log(newValue);
      setData(student);
} catch (error) {
  console.log('Error fetching data: ', error);
}}
const updateValue = async()=>{
  try{
    const token = localStorage.getItem('token'); //Retrieving token from local storage)
    const update1 = await UpdateProfileStu(token, newValue)
    setData(update1);
    fetchData();
    alert("Successfully update!");
  }catch(error){
    console.log('Error updating value: ', error);
  }
}
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
        <title>Edit Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="APUlogo.png" />        
      </Head>
      <main className={styles.header}>                     
      <table>
                <tbody>
                    <tr>
                        <td>
                            <Image
                            src="/APUlogo.png"
                            alt="APU Logo"
                            className={styles.vercelLogo}
                            width={50}
                            height={50}
                            priority            
                            />
                        
                        </td>
                        <td><b className={styles.title4}>ApFYPCentre</b></td>                     
                        <td><a href="http://localhost:3000/ProfileStu" className={styles.button3}>Profile</a></td>
                        <td><a href="http://localhost:3000/SubStu" className={styles.button2}>Submission</a></td>                        
                        <td><a href="http://localhost:3000/StaffStu" className={styles.button2}>Lecturer</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box6} onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                              
      </main>            
      <div className={styles.content5}>
        <a href="http://localhost:3000/ProfileStu">
        <div className={styles.button5}>
          Back 
        </div>
        </a>
      </div>  
      <div className={styles.contentbox3}>
        <div className={styles.image}></div>
        {data && (
          <><div className={styles.namebox1} key={data.tp_number}>
            <h2>{data.name}</h2>
            <h3>{data.tp_number}</h3>
            {data.intake_code}
          </div><br /><br /><br /><br /><div className={styles.topicbox2}>
            <h4>Final Year Project Title</h4><br />
            <input type="text" value={data.title} className={styles.textbox} readOnly/><br/><br/>
            <input type="text"  value={newValue}onChange={(e => setNewValue(e.target.value))} className={styles.textbox}/><br/><br/>
            <button className={styles.button6} onClick={updateValue}>Done</button>
          </div></>

        )}
        
        
      </div>
      <div className={styles.contentbox3}>
      <br /><br /><br />
      </div>
      
      <br /><br /><br />
      <Footer />
      </>
  )
}