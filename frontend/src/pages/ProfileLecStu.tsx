import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
const inter = Inter({ subsets: ['latin'] })
import{logout} from '@/pages/api/api'
import { useEffect, useState } from 'react'
import { getLecturerStudentProfile } from '@/pages/api/api';
import { UpdateProgression } from '@/pages/api/api'

export default function Home() {
    const [data, setData] = useState([]);
    const [newStatus, setNewStatus] = useState('');
    const [newStatus1, setNewStatus1] = useState('');
    const [newStatus2, setNewStatus2] = useState('');
    const[message, setMessage] = useState('');    
    useEffect(() => {
      
        fetchData();

    }, []);
    const fetchData = async () => {
        try {
              const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)
              const student = await getLecturerStudentProfile(token);
              setData(student);
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
  const updateValue = async()=>{
    try{
      const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)
      const update1 = await UpdateProgression(token, newStatus, newStatus1, newStatus2)
      setData(update1);
      console.log(update1);
      fetchData();
    }catch(error){
      console.log('Error updating value: ', error);
    }
  }
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
                        <td><a href="http://localhost:3000/HomeStu"><b className={styles.title1}>ApFYPCentre</b></a></td>                     
                        <td><a href="http://localhost:3000/ProfileSup" className={styles.button2}>Profile</a></td>
                        <td><a href="http://localhost:3000/StuSup" className={styles.button3}>Student</a></td>                        
                        <td><a href="http://localhost:3000/SubSup" className={styles.button2}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box6}  onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                              
      </main>            
      <div className={styles.content5}>
        <a href="http://localhost:3000/StuSup">
        <div className={styles.button5}>
          Back 
        </div>
        </a>
      </div>            
       <br /><br /><br />
       
      
      
      <div className={styles.contentbox3}>
      <div className={styles.contentbox3a}>
                {data && (
                  <><div className={styles.image}></div><div className={styles.namebox1}>
                              <h2>{data.name}</h2>
                              <h3>{data.tp_number}</h3>
                              {data.intake_code}
                          </div><div className={styles.line2}></div><div className={styles.topicbox}>
                                  <h4>Final Year Project Title</h4>
                                  <br />
                                  <h2>{data.title}</h2>
                              </div><div className={styles.table1}>
                                  <table>
                                      <tbody>
                                          <tr>
                                              <td>Field of Study</td>
                                              <td>: {data.field_of_study}</td>
                                          </tr>
                                          <tr>
                                              <td>Specialize</td>
                                              <td>: {data.specialism}</td>
                                          </tr>
                                          <tr>
                                              <td>Email</td>
                                              <td>: {data.email}</td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <div><br /><input type="checkbox" value={newStatus} onChange={(event => setNewStatus(event.target.checked ? "1" : ""))}/>IR <br />
                                  <input type="checkbox" value={newStatus1} onChange={(event => setNewStatus1(event.target.checked ? "1" : ""))}/>Documentation<br />
                                  <input type="checkbox" value={newStatus2} onChange={(event => setNewStatus2(event.target.checked ? "1" : ""))}/>Presentation <br />
                                  </div>
                                  <div><br /><br /><div className={styles.button9} onClick={updateValue}><a href=""><button>Assign</button></a></div></div>
                              </div></>
                )}
              </div>
              {message && <p className={styles.word6}>Successfully Update.</p>}
        
              </div>

        
        
        <br /><br /><br /><br /><br /><br />                                       
      <br /><br /><br />
      <Footer />
      </>
  )
}


