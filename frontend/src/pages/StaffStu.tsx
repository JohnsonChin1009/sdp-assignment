import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import { getStudentLec } from '@/pages/api/api.js'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router';
import{logout} from '@/pages/api/api'


export default function Home() {
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        const data = await getStudentLec(token);
        setData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }
    
    fetchData();
  }, []);
  const handleLogout = async()=>{
    try{
      await logout();
    }catch(error){
      console.error('Error.logging out: ', error);
    }
  };
  const handleClick = (id) => {    
    localStorage.setItem('id', id);
    console.log(id);

    router.push('/Profile1');
  };

    return (
      <>
        <Head>
          <title>Staff</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="APUlogo.png" />        
        </Head>
        <main className={styles.header}>                     
              <table>
                  <tbody>
                      <tr>
                          <td><a href="http://localhost:3000/HomeStu">
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
                          <td><a href="http://localhost:3000/ProfileStu" className={styles.button2}>Profile</a></td>
                          <td><a href="http://localhost:3000/SubStu" className={styles.button2}>Submission</a></td>                        
                          <td><a href="http://localhost:3000/StaffStu" className={styles.button3}>Staff</a></td>
                          <td> <br/></td>
                          <td><br/></td>
                          <td><a href="http://localhost:3000" className={styles.box6} onClick={handleLogout}><u>Logout</u></a></td>
                      </tr>
                  </tbody>                
              </table>                                                              
        </main>

        <div className={styles.content5}>
        <a href="http://localhost:3000/HomeStu">
          <div className={styles.button5}>
            Back 
          </div>
          </a>  <br />
      </div>
       <br /><br /><br /><br />
        <div className={styles.content6}>
          {data &&(
            <><div className={styles.box10} key={data.id}>
              <a href='http://localhost:3000/Profile1'><div className={styles.text} onClick={() => handleClick(data.projectmanagerid.toString())}>Project Manager</div><br />
                <div className={styles.image2}></div><br /><br /><br /><br /><br /><br />
                <div className={styles.text}><b>{data.projectmanager}</b><br/> {data.projectmanagerid}</div></a>
            </div><div className={styles.line3}></div><div className={styles.box10} onClick={() => handleClick(data.supervisorid.toString())}>
            <a href='http://localhost:3000/Profile1'><div className={styles.text1}>Supervisor</div><br />
                <div className={styles.image2}></div><br /><br /><br /><br /><br /><br /><br />
                <div className={styles.text}><b>{data.supervisor}</b></div></a>
              </div><div className={styles.line3}></div><div className={styles.box10} onClick={() => handleClick(data.secondmarkerid.toString())}>
              <a href='http://localhost:3000/Profile1'><div className={styles.text}>Second Marker</div><br />
                <div className={styles.image2}></div><br /><br /><br /><br /><br /><br /><br />
                <div className={styles.text}><b>{data.secondmarker}</b></div></a>
              </div></>
          )}
          
          
        </div>
        <br /><br /><br /><br /><br /><br />
        <Footer />
        </>
  )
}