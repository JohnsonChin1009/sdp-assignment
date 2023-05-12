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
      router.push('/ProfilePMLec');
    };

    const filteredData = data.filter((staff) => {
      return staff.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        
              <div className={style.container}>
                {filteredData.map((staff) => (
                  <div className={style.row1} key={staff.id} onClick={() => handleClick(staff.id)}>
                    <div className={style.image}></div>
                    <div><a href="http://localhost:3000/ProfilePMLec">{staff.name}<br/><br/>{staff.field_of_study}</a></div>                                      
                    </div>
                ))}
              </div>
            
       
        
    )}