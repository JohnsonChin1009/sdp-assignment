import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/layout/Footer.js'
import Index from'@/layout/Index.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ApFYPCentre</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://images.credly.com/images/c970e3b3-bd27-475d-851c-b690ac1a5ffa/blob.png" />
      </Head>
      <main className={styles.main}>                           
        <div className={styles.center}>
          <Image
            src="/APUlogo.png"
            alt="APU Logo"
            className={styles.vercelLogo}
            width={150}
            height={150}
            priority
          />          
          <p className={styles.title2}><b className={styles.title}>ApFYPCentre</b><br />
          <i className={styles.title3}>APU Final Year Project</i> </p>                              
        </div>               
      </main>
      <Index />         
      <Footer />      
    </>
  )
}