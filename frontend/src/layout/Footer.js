import styles from '@/styles/Home.module.css'
export default function Footer(){
    return (
        <div className={styles.footer}>
          <div className={styles.info}>
              <b>Asia Pacific University of Technology & Innovation <br />(APU) <br /></b>
              Technology Park Malaysia Bukit Jalil, <br />
              Kuala Lumpur 57000 Malaysia.JPT/BPP(U)1000-801/63/Jld.3(18)
          </div>
          <div className={styles.contact}>
            Tel: +603 8996 10001 300 888 278 (Toll-free) <br />
            Email: Info@apu.edu.my <br />
            Web: www.apu.edu.my
          </div>
          <div className={styles.line}></div>
        </div> 
    )
}