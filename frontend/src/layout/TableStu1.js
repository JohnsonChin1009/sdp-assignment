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
              setData(student);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
      };
        fetchData();

    }, []);
    return (
        <main>
      <div className={style.container}>
        {data && (
          <div className={style.contentbox3a} key={data.tp_number}>
            <div className={style.image}></div>
            <div className={style.namebox1}>
              <h2>{data.name}</h2>
              <h3>{data.tp_number}</h3>
            </div>
            <div className={style.line2}></div>
            <div className={style.topicbox}>
              <h4>Final Year Project Title</h4>
              <br />
              <h2>{data.title}</h2>
            </div>
            <div className={style.table1}>
              <table>
                <tbody>
                  <tr>
                    <td>Field of Study</td>
                    <td>: {data.field_of_study}</td>
                  </tr>
                  <tr>
                    <td>Specialize</td>
                    <td>: {data.specialism}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>: {data.email}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>Project Manager</td>
                    <td>: {data.projectmanager}</td>
                  </tr>
                  <tr>
                    <td>Supervisor</td>
                    <td>: {data.supervisor}</td>
                  </tr>
                  <tr>
                    <td>Second Marker</td>
                    <td>: {data.secondmarker}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}