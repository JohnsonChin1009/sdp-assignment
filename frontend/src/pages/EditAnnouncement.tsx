import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Slides from '@/layout/SlidesEdit.js'
const inter = Inter({ subsets: ['latin'] })
import{logout} from '@/pages/api/api'
import { useEffect, useState } from 'react'
import { addNewAnnouncements } from '@/pages/api/api'
import{getAllAnnouncements} from '@/pages/api/api';


export default function Home() {
    const [newTitle, setNewTitle] = useState('');
    const [newDes, setNewDescription] = useState('');
    const [newName, setNewName] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const[slides, setSlides] = useState([]);
    const[message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {      
      fetchData();
    }, []);
    const fetchData = async () => {
        try {
          const sliders = await getAllAnnouncements();
          setSlides(sliders);
        } catch (error) {
          console.log('Error fetching slide: ', error);
        }
      };
  const handleLogout = async()=>{
    try{
      await logout();
    }catch(error){
      console.error('Error.logging out: ', error);
    }
  };
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
        const token = localStorage.getItem('token');
        const response = await addNewAnnouncements(newTitle, newDes, newName, newDate, newTime, newStatus);
        fetchData();
        alert("New Announcement has added in.");
        setMessage("Successfully add.");
      } catch (error) {
        setError(true);
        setErrorMessage('Error adding Announcements')
      }
    };
  return (
    <>
      <Head>
        <title>Home</title>
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
                        <td><a href="http://localhost:3000/HomePM"><b className={styles.title4}>ApFYPCentre</b></a></td>                     
                        <td><a href="http://localhost:3000/ProfilePM" className={styles.button1}>Profile</a></td>
                        <td><a href="http://localhost:3000/StudentPM" className={styles.button2}>Student</a></td>
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button2}>Lecturer</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button2}>Mark</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3} onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                          
      </main> 
       
      
      <div className={styles.content3}>
        <a href="http://localhost:3000/HomePM">
          <div className={styles.button5}>
            Back 
          </div>
        </a>     
      </div><br />
        <Slides/>        
      
      <div className={styles.content1}>        
        <h3><u>New Announcements</u></h3>
        <form>  
            <br />
            Title: <br />
            <input type="text"  required value={newTitle} onChange={(event) => setNewTitle(event.target.value)} /><br /><br />
            Description:<br />
            <textarea name="" id="" cols="50" rows="3"required value={newDes} onChange={(event) => setNewDescription(event.target.value)} ></textarea><br /><br />            
            Announce by:<br/>
            <input type="text"  required value={newName} onChange={(event) => setNewName(event.target.value)} /><br /><br />
            Date: <br />
            <input type="date" required  value={newDate} onChange={(e => setNewDate(e.target.value))}/><br/>
            Time: <br/>
            <input type="time" required value={newTime} onChange={(e => setNewTime(e.target.value))}/><br/>
            <br />
            Status: <br />            
            <input type="checkbox" value={newStatus} onChange={(e => setNewStatus("1"))} />Show <br />
            <input type="checkbox" value={newStatus} onChange={(e => setNewStatus("0"))} />Hidden
            <br />
            <a href="http://localhost:3000/EditAnnouncement"><button type="submit" className={styles.button6} onClick={submit}>Add</button></a>
            {message && <p className={styles.word6}>Successfully add.</p>}
        </form>
        <Image 
        src="/design-pen1.png"
        alt="profile"
        className={styles.image5}
        width={100}
        height={100}               
        priority
      />
      </div>
      
      
      <Footer />
      </>
  )
}
