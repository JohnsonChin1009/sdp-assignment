
import styles from '@/styles/Home.module.css'
const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Mike", age: 35 },
  ];
export default function Table() {
    return (
<div className={styles.content9}>
      <form action="" className={styles.box12}>
          Supervise: 
          <select name="student" >
            <option value="-">All</option>
            <option value=""></option>
          </select>
      </form>
      
      <form className={styles.box12}>
        Mark:
        <select>
            <option value="-">All</option>
        </select>
      </form><br/><br/><br/>
      <div className={styles.container1}>
                {data.map((row) => (
                  <div className={styles.row} key={row.id}>
                    <div className={styles.image}></div>
                    <div>Name <br/>TP<br/>UCDF</div>
                    <div>Title<br/><br/>Supervisor</div>
                    <div>IR: <br/>Documentation: <br/>Presentation: <br/></div>                                        
                  </div>
                ))}
              </div>
</div>

)
}