import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Table from '@/layout/TableStu1.js'
import{logout} from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })
export default function Profile() {
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
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="APUlogo.png" />        
      </Head>
      <main className={styles.header}>             
        <a href="http://localhost:3000/HomeStu">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Image
                            src="/APUlogo.png"
                            alt="APU Logo"
                            className={styles.vercelLogo}
                            width={50}
                            height={50}
                            priority            
                            />
                        
                        </td>
                        <td><b className={styles.title1}>ApFYPCentre</b></td>                     
                        <td><a href="http://localhost:3000/ProfileStu" className={styles.button3}>Profile</a></td>
                        <td><a href="http://localhost:3000/SubStu" className={styles.button2}>Submission</a></td>                        
                        <td><a href="http://localhost:3000/StaffStu" className={styles.button2}>Staff</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box6} onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>
        </a>                                                      
      </main>
      <div className={styles.content3}>
        <a href="http://localhost:3000/HomeStu">
          <div className={styles.button5}>
            Back 
          </div>
        </a>    
      </div>
      <div className={styles.button7}><a href="http://localhost:3000/Profile2a"><button>Edit</button></a></div>
      <br />  
      
      
            <Table /><br />
      
      
      <br /><br /><br />
      <Footer />
      </>
  )
}

