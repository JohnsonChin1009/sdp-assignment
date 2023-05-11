import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Table from '@/layout/TableSub.js'
import { getAllResults } from '@/pages/api/api';
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Home() { 
    const[searchTerm, setSearchTerm] = useState('');    
    const [data, setData] = useState([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const students = await getAllResults();
          setData(students);
          console.log(students);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };
    
      fetchData();
    }, []);
  
  
  const handleSearch = () => {
    
  };
  return (
    <>    
      <Head>
        <title>Submission</title>
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
                        <td><a href="http://localhost:3000/StudentPM" className={styles.button2}>Student</a></td>
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button2}>Lecturer</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button4}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                          
      </main> 
        <div className={styles.content5}>
        <a href="http://localhost:3000/HomePM">
          <div className={styles.button5}>
            Back 
          </div>
          </a>  <br />
      </div>
      <div className={styles.contentbox2a}>      
          <input type="text" name="Search" placeholder="Search by name" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          <button type="submit" onClick={handleSearch} ><Image
                            src="/search_icon.png"
                            alt="Search"
                            className={styles.vercelLogo}
                            width={20}
                            height={10}
                            priority            
                            /></button>      
      </div><br /><br /><br /><br />
    
        <>
         {data.map((item) => (
            <div className={styles.row1} key={item.id}>
            <div className={styles.image}></div>
            <div><br/>{item.name} <br/>{item.tp_number}</div>
            <div><br/>{item.title}<br/><br/>Supervisor: {item.supervisor}<br/>SecondMarker: {data.secondmarker}</div>
            <div><br/>Documentation: <br/>Presentation: <br/>Final Mark: <br/></div>                                        
            <div><br/><br/><div className={styles.button7}><a href=""><button>Edit</button></a></div></div>
            </div>
          ))}
        </>
                        
      
      <Table />  
        
        <br /><br /><br />
        <Footer />
        </>
  )
}