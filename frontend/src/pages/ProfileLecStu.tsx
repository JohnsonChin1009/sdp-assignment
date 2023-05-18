import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
const inter = Inter({ subsets: ['latin'] })
import{logout} from '@/pages/api/api'
import { useEffect, useState } from 'react'
import { getLecStudentProfile } from '@/pages/api/api';
import { UpdateProgression } from '@/pages/api/api'

export default function Home() {
    const [data, setData] = useState([]);      
    const [Pro, setPro] = useState('');
    const [IR, setIR] = useState('');
    const [Doc, setDoc] = useState('');
    const [Pre, setPre] = useState('');
    const [Mark, setMark] = useState('');
    const[message, setMessage] = useState('');    
    useEffect(() => {
      
        fetchData();

    }, []);
    const fetchData = async () => {
        try {
              const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)
              const data = await getLecStudentProfile(token);
              setData(data);
              if (data.length > 0) {
                const initialStudent = data[0];                
                setPro(initialStudent.Pro);
                setIR(initialStudent.IR);
                setDoc(initialStudent.Doc);
                setPre(initialStudent.Pre);
                setMark(initialStudent.Mark);
                            
              }  
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
      const update1 = await UpdateProgression(token,Pro,IR,Doc,Pre, Mark)
      setData(update1.data);
      console.log(token);
      console.log(update1);
      fetchData();
      alert("Successfully updated!");
    }catch(error){
      console.log('Error updating value: ', error);
    }
  };
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
                        <td><a href="http://localhost:3000/HomeStu"><b className={styles.title4}>ApFYPCentre</b></a></td>                     
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
                                  <div>
                                  <br/><br/>
                                   Proposal: <input type="text" value={Pro || ""} onChange={(event)=> setPro(event.target.value)}/><br />
                                   IR: <input type="text" value={IR || ""} onChange={(event)=> setIR(event.target.value)}/><br />
                                   Documentation : <input type="text" value={Doc || ""} onChange={(event)=> setDoc(event.target.value)}/><br />
                                   Presentation : <input type="text" value={Pre || ""} onChange={(event)=> setPre(event.target.value)}/><br />
                                   Mark by: <select onChange={(event)=> setMark(event.target.value === 'Supervisor' ? '1' : '2')}>
                                    <option>-Choose-</option>
                                    <option value="Supervisor">Supervisor</option>
                                    <option value="SecondMarker">Second Marker</option>
                                   </select>
                                  </div>
                                  <div><br /><br /><div className={styles.button9} onClick={updateValue}><button>Update</button></div></div>
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


