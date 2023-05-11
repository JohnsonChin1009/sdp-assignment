import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import { getPMStudentProfile } from './api/api'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function StudentPM() { 
    const [data, setData] = useState([]);
    
useEffect(() => {
  const fetchData = async () => {
      try {
          const temp = localStorage.getItem('token');
          const tp_number = localStorage.get('tp_number');
          const token = {
              temp,
              tp_number,
          }
        const student = await getPMStudentProfile(token);
          setData(student);
    } catch (error) {
        console.log('Error fetching data: ', error);
    }
  };
    fetchData();

}, []);     
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
                        <td><a href="http://localhost:3000/ProfilePM" className={styles.button1}>Profile</a></td>
                        <td><a href="http://localhost:3000/StudentPM" className={styles.button4}>Student</a></td>
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button2}>Staff</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button2}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                          
      </main>
      <div className={styles.content5}>
        <a href="http://localhost:3000/StudentPM">
        <div className={styles.button5}>
          Back 
        </div>
        </a>
      </div>
      <div className={styles.container}>
                {data && (
                    <><div className={styles.contentbox3a}>
                    <div className={styles.contentbox3}>
                                <div className={styles.image}></div>
                                <div className={styles.namebox1} key={data.tp_number}>
                                    <h2>{data.name}</h2>
                                    <h3>{data.tp_number}</h3>
                                </div>
                                <div className={styles.line2}></div>
                                <div className={styles.topicbox}>
                                    <h4>Final Year Project Title</h4><br />
                                    <h2>{data.title}</h2>
                                </div>
                            
                            
                            <div className={styles.table1}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Field of Study</td>
                                                <td>: </td>
                                                <td>{data.field_of_study}</td>
                                            </tr>
                                            <tr>
                                                <td>Specialize</td>
                                                <td>: </td>
                                                <td>{data.specialism}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>: </td>
                                                <td>{data.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <table>
                                        <tbody>                                            
                                            <tr>
                                                <td>Supervisor</td>
                                                <td>: </td>
                                                <td><select name="Supervior" id="">
                                                    <option value="-">Choose</option>
                                                    <option value={data.id}>{data.supervisor}</option>
                                                </select></td>
                                            </tr>
                                            <tr>
                                                <td>Second Marker</td>
                                                <td>:  </td>
                                                <td><select name="Second Marker" id="">
                                                    <option value="-">Choose</option>
                                                    <option value={data.id}>{data.secondmarker}</option>
                                                </select></td>
                                            </tr>
                                            <tr>
                                                <td><button type="submit">Assign</button></td>
                                            </tr>
                                        </tbody>
        
                                        
                                    </table>
                                </div>
                            </div></div></>
                )}
            
                </div>
                <Footer />
      </>
      )
    }