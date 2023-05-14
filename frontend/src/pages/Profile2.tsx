import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import React from 'react'
import { useEffect, useState } from 'react'
import { getLecturerProfile } from './api/api'
import { UpdateProfileLec } from './api/api'
import{logout} from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState('');
  const [newField, setNewField] = useState('');
  const [newEmail, setNewEmail] = useState('');  
  
useEffect(()=>{
  fetchData();
},[])
const fetchData = async()=>{
  try {
    const token = localStorage.getItem('token'); //Retrieving token from local storage)
    const PM = await getLecturerProfile(token);
    console.log(PM);
    setData(PM);
} catch (error) {
console.log('Error fetching data: ', error);
}}
const updateValue = async()=>{
try{
  const token = localStorage.getItem('token'); //Retrieving token from local storage)
  const update1 = await UpdateProfileLec(token, newName, newField, newEmail)
  setData(update1);
  fetchData();
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
          <title>Profile</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-wxidth, initial-scale=1" />
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
                          <td><a href="http://localhost:3000/ProfilePM" className={styles.button3}>Profile</a></td>
                          <td><a href="http://localhost:3000/StudentPM" className={styles.button2}>Student</a></td>
                          <td><a href="http://localhost:3000/StaffPM" className={styles.button2}>Lecturer</a></td>
                          <td><a href="" className={styles.button2}>Submission</a></td>
                          <td> <br/></td>
                          <td><br/></td>
                          <td><a href="http://localhost:3000" className={styles.box3} onClick={handleLogout}><u>Logout</u></a></td>
                      </tr>
                  </tbody>                
              </table>
        </main>
        <div className={styles.content3}>
        <a href="http://localhost:3000/ProfilePM">
          <div className={styles.button5}>
            Back 
          </div>
        </a>  <br />    
      </div> 
      <div className={styles.contentbox4}>           
          <div className={styles.image} ></div>
          {data && (
            <><div className={styles.namebox1}>
              <div>{data.name}</div><br />              
              <input type="text" placeholder="Name"  value={newName}onChange={(e => setNewName(e.target.value))}/><br /><br />
              <div>{data.field_of_study}</div><br />
              <input type="text" placeholder="Field" value={newField}onChange={(e => setNewField(e.target.value))}/>
            </div><div className={styles.infobox2}>
                Email : {data.email} <br /><br />
                Email  : <input type="email"value={newEmail}onChange={(e => setNewEmail(e.target.value))}/><br /><br /> <br />               
              </div><button onClick={updateValue} className={styles.button6}>Done Editing</button></>
             
          )}
          
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />                                                    
            <br /><br /><br /><br /><br /><br />
        </div>
            <Footer />
      </>
  )
}