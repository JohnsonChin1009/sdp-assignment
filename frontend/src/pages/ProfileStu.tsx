import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Table from '@/layout/TableStu1.js'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
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
                        <td><a href="http://localhost:3000/ProfileStu" className={styles.button3}>Profile</a></td>
                        <td><a href="http://localhost:3000/SubStu" className={styles.button2}>Submission</a></td>                        
                        <td><a href="http://localhost:3000/StaffStu" className={styles.button2}>Staff</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000/" className={styles.box6}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                              
      </main>
      <div className={styles.content3}>
        <a href="http://localhost:3000/HomeStu">
          <div className={styles.button5}>
            Back 
          </div>
        </a>  <br />    
      </div> 
      <div className={styles.contentbox3}>
        <div className={styles.image}></div>
        <div className={styles.namebox}>
            <h2>Name</h2>
            <h3>TP</h3>
            UCDF
        </div>
        <div className={styles.line2}></div>
        <div className={styles.topicbox}>
            <h4>Final Year Project Title</h4><br />
            <h2>TITLE</h2>
        </div>
      </div>
      <div className={styles.contentbox3}>
            <Table />
      </div>
      
      <br /><br /><br />
      <Footer />
      </>
  )
}
