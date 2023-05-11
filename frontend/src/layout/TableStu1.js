import style from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getStudentProfile } from '@/pages/api/api';

export default function Home() {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
      const fetchData = async () => {
          try {
                const token = localStorage.getItem('token'); //Retrieving token from local storage)
                const student = await getStudentProfile(token);
                const array = Object.values(student);
              setData(array);
              console.log(array);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
      };
        fetchData();

    }, []);
    return (
        <main>
            <div className={style.container}>
                {data.map((item) => (
            <><div className={style.contentbox3a} key={item.id}>
                        <div className={style.image}></div>
                        <div className={style.namebox1}>
                            <h2>{item.name}</h2>
                            <h3>{item.tp_number}</h3>
                        </div>
                        <div className={style.line2}></div>
                        <div className={style.topicbox}>
                            <h4>Final Year Project Title</h4><br />
                            <h2>{item.title}</h2>
                        </div>
                    </div><div className={style.table1}>
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
                                        <td>Project Manager</td>
                                        <td>: {item.projectmanager}</td>
                                    </tr>
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
                </div>
      </main>
    )
}