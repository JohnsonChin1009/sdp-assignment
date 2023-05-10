import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getStudents } from '@/pages/api/api';

export default function Home() {
    return (
        <main>
        <div className={styles.contentbox3a}>        
        <div className={styles.image}></div>
        <div className={styles.namebox1}>
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
        <div className={styles.table1}>                                  
        <table>
            <tbody>
                <tr>
                    <td>Field of Study</td>
                    <td>: </td>
                </tr>
                <tr>
                    <td>Specialize</td>
                    <td>: </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: </td>
                </tr>
            </tbody>
        </table>
        <br />
        <table>
            <tbody>                
                <tr>
                    <td>Supervisor</td>
                    <td>: </td>
                </tr>
                <tr>
                    <td>Second Marker</td>
                    <td>:  </td>
                </tr>
            </tbody>
        </table>        
      </div>
      </main>
    )
}