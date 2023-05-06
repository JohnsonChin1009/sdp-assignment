import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
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
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button4}>Staff</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button2}>Submission</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000/login" className={styles.box3}><u>Logout</u></a></td>
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
      <div className={styles.contentbox2}>
        <form action="">
          <select name="field">
            <option value="-">All</option>
            <option value="IT">IT</option>
            <option value="BUS">Business</option>
            <option value="ENG">Engineering</option>
          </select>
          <select name="Specialize">
            <option value="-">-</option>
          </select>
        </form>
      </div>
      <div className={styles.contentbox2a}>
      <form action="">
          <input type="text" name="Search"/>
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
             
      <br /><br /><br />
      <Footer />
      </>
  )
}