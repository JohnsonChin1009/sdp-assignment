import style from '@/styles/Home.module.css'


const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Mike", age: 35 },
  ];
export default function Home() {
    return (
        
              <div className={style.container}>
                {data.map((row) => (
                  <div className={style.row1} key={row.id}>
                    <div className={style.image}></div>
                    <div><br/>Name <br/>Field<br/>Specialize</div>                                        
                  </div>
                ))}
              </div>
            
       
        
    )}