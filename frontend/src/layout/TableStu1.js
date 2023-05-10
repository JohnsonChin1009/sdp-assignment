import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getStudentProfile } from '@/pages/api/api';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const student = await getStudentProfile(token);
          setData(student);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);
    return (
        <main>
            {data.map((item) => (
        <><div className={styles.contentbox3a} key={item.id}>
                    <div className={styles.image}></div>
                    <div className={styles.namebox1}>
                        <h2>{item.name}</h2>
                        <h3>{item.tp_number}</h3>
                    </div>
                    <div className={styles.line2}></div>
                    <div className={styles.topicbox}>
                        <h4>Final Year Project Title</h4><br />
                        <h2>{item.fyp_title}</h2>
                    </div>
                </div><div className={styles.table1}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Field of Study</td>
                                    <td>: {item.field_of_study}</td>
                                </tr>
                                <tr>
                                    <td>Specialize</td>
                                    <td>: {item.specialism}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>: {item.email}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Supervisor</td>
                                    <td>: {item.supervisor}</td>
                                </tr>
                                <tr>
                                    <td>Second Marker</td>
                                    <td>:  {item.secondmarker}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div></>))}
      </main>
    )
}