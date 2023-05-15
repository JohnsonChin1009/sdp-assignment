import Image from 'next/image'
import styles from '@/styles/Home.module.css'
export default function header(){
    return (
        <main className={styles.header}>                                       
                <a href="http://localhost:3000/">
                                <Image
                                src="/APUlogo.png"
                                alt="APU Logo"
                                className={styles.vercelLogo}
                                width={50}
                                height={50}
                                priority            
                                />
                            </a>
                            <a href="http://localhost:3000/"><b className={styles.title1}>ApFYPCentre</b></a>
                            
                        
                                                                                                      
      </main>

    )
}

