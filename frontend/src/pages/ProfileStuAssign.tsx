import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import { getPMStudentProfile } from './api/api'
import { useEffect, useState } from 'react'
import { getUpdatedStudent } from './api/api'
const inter = Inter({ subsets: ['latin'] })

interface Lecturer {
    id: string;
    name: string;
}

interface StudentData {
    name: string;
    tp_number: string;
    title: string;
    field_of_study: string;
    supervisor: string;
    secondmarker: string;
    specialism: string;
    email: string;
    lecturers: Lecturer[];
  }

export default function StudentPM() {
    const [selectedSupervisorId, setSelectedSupervisorId] = useState('');
    const [selectedSecondMarkerId, setSelectedSecondMarkerId] = useState('');
    const [data, setData] = useState<StudentData | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('tp_number');
                console.log(token);
                const student = await getPMStudentProfile(token);
                setData(student);
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);
    const AssignLecturers = async()=>{
        try {
            const token = localStorage.getItem('tp_number');
            console.log(token);
            const updatedstudent = await getUpdatedStudent(token, selectedSupervisorId,selectedSecondMarkerId);
            setData(updatedstudent);
        } catch (error) {
            console.log('Error fetching data: ', error);
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
                            <td> <br /></td>
                            <td><br /></td>
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
            <div className={styles.contentbox3}>
                {data && (
                    <>
                        
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
                                            <td>
                                                <select name="Supervisor" id="" onChange={(e) => setSelectedSupervisorId(e.target.value)} value={selectedSupervisorId}>
                                                    
                                                    {data.lecturers.map((lecturer) => {
                                                        const isSecondMarker = lecturer.id === selectedSecondMarkerId;
                                                        if (!isSecondMarker) {
                                                        return (
                                                            <option key={lecturer.id} value={lecturer.id}>
                                                            {lecturer.name ? lecturer.name: ""}
                                                            </option>
                                                        );
                                                        }
                                                        return null;
                                                    })}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Second Marker</td>
                                            <td>:  </td>
                                            <td>
                                                <select name="Second Marker" id="" onChange={(e) => setSelectedSecondMarkerId(e.target.value)} value={selectedSecondMarkerId}>
                                                    
                                                    {data.lecturers.map((lecturer) => {
                                                        const isSupervisor = lecturer.id === selectedSupervisorId;
                                                        if (!isSupervisor) {
                                                            return (
                                                              <option key={lecturer.id} value={lecturer.id}>
                                                                {lecturer.name ? lecturer.name: ""}
                                                              </option>
                                                            );
                                                          }
                                                          return null;
                                                    })}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><button type="submit" onClick={AssignLecturers}>Assign</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        
                    
                    </>
                )}
            </div>
            <Footer/>
        </>
        
    );
}