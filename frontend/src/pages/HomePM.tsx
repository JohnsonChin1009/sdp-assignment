import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Slides from '@/layout/Slider.js'
const inter = Inter({ subsets: ['latin'] })
import{logout} from '@/pages/api/api'
export default function Home() {
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
        <title>Home</title>
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
                        <td><a href="http://localhost:3000/StaffPM" className={styles.button2}>Lecturer</a></td>
                        <td><a href="http://localhost:3000/SubPM" className={styles.button2}>Mark</a></td>
                        <td> <br/></td>
                        <td><br/></td>
                        <td><a href="http://localhost:3000" className={styles.box3} onClick={handleLogout}><u>Logout</u></a></td>
                    </tr>
                </tbody>                
            </table>                                                          
      </main> 
      <div className={styles.content1}>
      <a href="http://localhost:3000/EditAnnouncement"><div className={styles.button7}><button>Edit</button></div></a>
      <br />
        <Slides/>
        <div>
      <Image 
        src="/design-lamp1.png"
        alt="profile"
        className={styles.image4}
        width={100}
        height={100}               
        priority
      />
      </div>
        
      </div>
      <div className={styles.content2}>
        <a href="http://localhost:3000/ProfilePM">
          <div className={styles.box4}>          
            <Image 
            src="/profile.png"
            alt="profile"
            className={styles.image1}
            width={100}
            height={100}        
            priority
            />
            <p>Profile</p>
          </div>
        </a>
        <a href="http://localhost:3000/StudentPM">
        <div className={styles.box5}>          
            <Image 
            src="/student.png"
            alt="student"
            className={styles.image1}
            width={100}
            height={100}        
            priority
            />
            <p className={styles.word1}>Student</p>
          </div> 
        </a>
        <a href="http://localhost:3000/StaffPM">
        <div className={styles.box5}>          
            <Image 
            src="/staff.png"
            alt="staff"
            className={styles.image1}
            width={100}
            height={100}        
            priority
            />
            <p className={styles.word1}>Lecturer</p>
          </div>
        </a>
        <a href="http://localhost:3000/SubPM">
        <div className={styles.box5}>          
            <Image 
            src="/submission.png"
            alt="submission"
            className={styles.image1}
            width={100}
            height={100}        
            priority
            />
            <p className={styles.word}>Mark</p>
          </div>
        </a>
       
        
      </div>
      <br /><br /><br /><br />
      <Footer />
      </>
  )
}
