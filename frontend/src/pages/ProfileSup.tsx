import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {addSupEvent} from '@/pages/api/api';
import { useEffect, useState } from 'react'
import { getLecturerProfile } from '@/pages/api/api';
import{getLecSchedule} from '@/pages/api/api';
import { deleteEvent } from '@/pages/api/api';

const inter = Inter({ subsets: ['latin'] })
//Calendar
const Calendar = () => {
  const[events, setEvents] =useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const token = localStorage.getItem('token');
        console.log(token);
        const eventsData = await getLecSchedule(token);
        setEvents(eventsData);
      }catch(error){
        console.log('Error fetching data: ', error);
      }
    };
    fetchData();

  }, []);
  
  return (
    <div className={styles.Ccontentbox}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"        
        events={events.map((event) => ({
          title: event.name,
          start: event.start,
          end: event.end
        }))} 
        selectable={true}  
      />
    </div>
  );
};

// addEvent(eventData);

//Navigation bar
export default function Home() {
  const [data, setData] = useState([]);
  const[events, setEvents] =useState([]);
    
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const token = localStorage.getItem('token');
        console.log(token);
        const eventsData = await getLecSchedule(token);
        setEvents(eventsData);
      }catch(error){
        console.log('Error fetching data: ', error);
      }
    };
    fetchData();

  }, []);
    useEffect(() => {
      const fetchData = async () => {
          try {
                const token = localStorage.getItem('token'); //Retrieving token from local storage)
                const lecturer = await getLecturerProfile(token);
                setData(lecturer);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
      };
        fetchData();

    }, []);
  const [eventName, setEventName] = useState('');
  const [startDatetime, setStartDatetime] = useState('');
  const [endtime, setEndtime] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
        const token = localStorage.getItem('token');
        const response = await addSupEvent(token, eventName, startDatetime, endtime);
      } catch (error) {
        setError(true);
        setErrorMessage('Error adding Event')
      }
    };
    const handleDeleteEvent = async (id) => {
      try {
        const response = await deleteEvent(id);
        setData(data.filter((event) => event.id !== id));
      } catch (error) {
        console.log('Error deleting event: ', error);
      }
    };

  return (
    <><Head>
      <title>Profile</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-wxidth, initial-scale=1" />
      <link rel="icon" href="APUlogo.png" />
    </Head><main className={styles.header}>
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
                  priority />
              </a>
              </td>
              <td><a href="http://localhost:3000/HomeSupervisor"><b className={styles.title1}>ApFYPCentre</b></a></td>
              <td><a href="http://localhost:3000/ProfileSup" className={styles.button3}>Profile</a></td>
              <td><a href="http://localhost:3000/StuSup" className={styles.button2}>Student</a></td>
              <td><a href="http://localhost:3000/SubSup" className={styles.button2}>Submission</a></td>
              <td> <br /></td>
              <td><br /></td>
              <td><a href="http://localhost:3000" className={styles.box3}><u>Logout</u></a></td>
            </tr>
          </tbody>
        </table>
        <Calendar />
      </main><div className={styles.content4}>
        <a href="http://localhost:3000/HomeSupervisor">
          <div className={styles.button5}>
            Back
          </div>
        </a>  <br />
      </div><div className={styles.line1}></div>
      <div className={styles.contentbox1}>
         
          {data &&(
            <>
            <div className={styles.image} key={data.id}></div>
            <div className={styles.namebox}>
            <div>{data.name}</div><br /><br />
            <div>{data.field_of_study}</div>
          </div><div className={styles.infobox}>
              Email  : {data.email}<br />              
              <br />
              <a href="http://localhost:3000/Profile2"><button type="submit" className={styles.button6}>Edit</button></a>
            </div> <div className={styles.infobox1}>
                <form onSubmit={submit}> <br />
                  Event Name: <br /><input type="text" name="EventName" required value={eventName} onChange={(event) => setEventName(event.target.value)} /><br />
                  Date:
                  <br />
                  <input type="datetime-local" required value={startDatetime} onChange={(event) => setStartDatetime(event.target.value)} />
                  to
                  <input type="time" required value={endtime} onChange={(event) => setEndtime(event.target.value)} /><br />
                  <button type="submit" className={styles.button6}>Add</button>
                </form>

              </div> 
         
                                             
          </>  )}
          <br />
          <div className={styles.infobox3}>
          <h3>Events happening:  </h3>
          <br />
          Events <br />
          {events.map((events)=>  (
            <table className={styles.eventTable} key={events.id}>            
            <tbody>
             
              <tr></tr>
              <><tr >
                  <td>{events.name}</td>                
                    <td>{events.start}</td>
                    <td><br /></td>
                    <td>{events.end}</td>
                    <td><button className={styles.button6} onClick={() => handleDeleteEvent(events.id)}>Remove</button></td>
                  </tr></>   
                                                
            </tbody>
                                          
          </table>
         ))}  
          
          
          </div>                         
           
        </div>
        
        <div className={styles.contentbox3}></div>
        
        <Footer />

        

        
      </>
  )}
      
    
      
