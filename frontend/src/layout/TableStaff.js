import style from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getPMStaff } from '@/pages/api/api';
import { useRouter } from 'next/router';

export default function TableStaff({ search }) {
  const [data, setData] = useState([]);
  
  const router = useRouter();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          const lecturers = await getPMStaff(token);
          setData(lecturers);
          
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);
    const handleClick = (id) => {
      localStorage.setItem('id', id);
      console.log(id);
      router.push('/ProfilePMLec');
    };

    const filteredData = data.filter((staff) => {
      return staff.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        
              <table  border="{10px}">
                <tbody>
                {filteredData.map((staff) => (
                  <div className={style.contentbox3} key={staff.id} onClick={() => handleClick(staff.id)}>
                    <td width="300px|100%">
                      <tr><div><a href="http://localhost:3000/ProfilePMLec"><h3>{staff.name}</h3><br/></a></div></tr>
                    </td>
                    <td width="100px|100%">
                      <tr>{staff.id}</tr>
                    </td>
                    <td>
                      <tr width="400px|100%">{staff.field_of_study}</tr>
                    </td>
                    </div>
                ))}
                </tbody>
              </table>
            
       
        
    )}