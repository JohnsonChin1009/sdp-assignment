import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import TableStaff from '@/layout/TableStaff.js'
import { useState } from 'react';
import {SearchPM} from '@/pages/api/api';
import{logout} from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
        console.log(search);
        const response = await SearchPM(search);        
      } catch (error) {
        setError(true);
        setErrorMessage('Error searching')
      }
    };
    const handleLogout = async()=>{
      try{
        await logout();
      }catch(error){
        console.error('Error.logging out: ', error);
      }
    };

  return (
    <>    
      <Head>
        <title>Lecturer</title>
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
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button4}>Lecturer</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button2}>Mark</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3} onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                          
      </main>       
      <div className={styles.content5}>
        <a href="http://localhost:3000/HomePM">
        <div className={styles.button5}>
          Back 
        </div>
        </a>
      </div>                                     
      <div className={styles.contentbox2a}>
      <form onSubmit={handleSearch}>
        <input type="text" name="Search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={"Search by Name"}/>
          <button type="submit"><Image
                            src="/search_icon.png"
                            alt="Search"
                            className={styles.vercelLogo}
                            width={20}
                            height={10}
                            priority            
                            /></button>
      </form>
      </div>
      <br /><br /><br />    <br /><br /><br />                          
      
      <TableStaff search={search} />                                     
             
      <br /><br /><br /><br /><div className={styles.contentbox3}><br /><br /><br/><br/></div>
      <Footer />
      </>
  )
}