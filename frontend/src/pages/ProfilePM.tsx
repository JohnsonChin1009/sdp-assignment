import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const inter = Inter({ subsets: ['latin'] })

//Calendar
const Calendar = () => {
  return (
    <div className={styles.Ccontentbox}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2023-05-01' },
          { title: 'Event 2', date: '2023-05-02' }
        ]}
      />
    </div>
  );
};

//Navigation bar
export default function Home() {
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
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button2}>Staff</a></td>
                        <td><a href="" className={styles.button2}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000/login" className={styles.box3}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>
            <Calendar/>                                                          
      </main>       
      <div className={styles.content4}>
        <a href="http://localhost:3000/HomePM">
          <div className={styles.button5}>
            Back 
          </div>
        </a>     
      </div>        
        
      <div className={styles.line1}></div>        

        <div className={styles.contentbox1}>           
          <div className={styles.image}></div>
          <form action="">
          <div className={styles.namebox}>
          Name <br />
          Lecture
          </div> 
          <div className={styles.infobox}>
          Email  : <br />
          <input type="text" /><br />
          Tel    :<br />
          <input type="text" /><br />
          Preferable Platform :
          <input type="text" />
          <br />
            <a href="http://localhost:3000/Profile"><input type="submit" value="Edit" className={styles.button6} /></a>
            <br />
            Event Name: <br /><input type="text" name="EventName"/><br />
            Date:
            <br />
            <input type="datetime-local"></input><br /><br />
            <button type="submit" value="Add" className={styles.button6}>Add</button>
            </div> 
          </form>                                              
           
        </div>
        
        
      <Footer />
      </>
  )
}
