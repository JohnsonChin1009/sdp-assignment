import styles from '@/styles/Home.module.css'
export default function Footer(){
    return (
        <div className={styles.content}> 
        <div className={styles.box}>
          <div className={styles.card1}>
            Student
          </div>
          <a href="">
          <div className={styles.button}>
            Click
          </div>
          </a>                             
        </div>
        <div className={styles.box}>
          <div className={styles.card1}>
            Second Marker
          </div>
          <a href="">
          <div className={styles.button}>
            Click
          </div>
          </a> 
        </div>
        <div className={styles.box}>
          <div className={styles.card1}>
            Supervisor
          </div>
          <a href="">
          <div className={styles.button}>
            Click
          </div>
          </a> 
        </div>
        <div className={styles.box}>
          <div className={styles.card1}>
            Project Manager
          </div>
          <a href="">
          <div className={styles.button}>
            Click
          </div>
          </a> 
        </div>           
      </div>
    )
}