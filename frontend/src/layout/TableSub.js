import style from '@/styles/Home.module.css'


const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Mike", age: 35 },
  ];
export default function Home() {
    return (
        
              <div className={style.container1}>
                {data.map((row) => (
                  <div className={style.row} key={row.id}>
                    <div className={style.image}></div>
                    <div>Name <br/>TP<br/>UCDF</div>
                    <div>Title<br/><br/>Supervisor</div>
                    <div>Documentation: <br/>Presentation: <br/>Final Mark: <br/></div>                                        
                  </div>
                ))}
              </div>
            
       
        
    )}