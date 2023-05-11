import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {addEvent} from '@/pages/api/api';

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

// addEvent(eventData);

//Navigation bar
export default function Home() {
  const [eventName, setEventName] = useState('');
  const [startDatetime, setStartDatetime] = useState('');
  const [endtime, setEndtime] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
        const response = await addEvent(eventName, startDatetime, endtime);
      } catch (error) {
        setError(true);
        setErrorMessage('Error adding Event')
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
                        <td><a href="http://localhost:3000/HomeSupervisor"><b className={styles.title1}>ApFYPCentre</b></a></td>                     
                        <td><a href="http://localhost:3000/ProfileSup" className={styles.button3}>Profile</a></td>
                        <td><a href="http://localhost:3000/StuSup" className={styles.button2}>Student</a></td>                        
                        <td><a href="http://localhost:3000/SubSup" className={styles.button2}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>
            <Calendar/>                                                          
      </main>       
      <div className={styles.content4}>
        <a href="http://localhost:3000/HomeSupervisor">
          <div className={styles.button5}>
            Back 
          </div>
        </a>  <br />    
      </div>     
        
      <div className={styles.line1}></div>        

        <div className={styles.contentbox1}>           
          <div className={styles.image}></div>
          <form action="">
          <div className={styles.namebox}>
          <input type="text" placeholder="Name"/><br /><br />
          <input type="text" placeholder="Field"/>
          </div> 
          <div className={styles.infobox}>
          Email  : <br />
          <input type="text" /><br />
          Tel    :<br />
          <input type="text" /><br />
          Preferable Platform :<br/>
          <input type="text" />
          <br />
          <a href="http://localhost:3000/Profile"><input type="submit" value="Edit" className={styles.button6} /></a>
          </div> 
          </form> 
          <div className={styles.infobox1}> 
          <form onSubmit={submit}> <br />
            Event Name: <br /><input type="text" name="EventName" required value={eventName} onChange={(event) => setEventName(event.target.value)} /><br />
            Date:
            <br />
            <input type="datetime-local" required value={startDatetime} onChange={(event) => setStartDatetime(event.target.value)} />
               to
            <input type="time"  required value={endtime} onChange={(event) => setEndtime(event.target.value)} /><br />
            <button type="submit" className={styles.button6}>Add</button>
          </form>
          
          </div> 
                                                      
           
        </div>
        
        <div></div>
      <Footer />
      </>
  )
}
