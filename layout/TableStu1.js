import styles from '@/styles/Home.module.css'


export default function Home() {
    return (
        <main className={styles.table1}>                           
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
                    <td>Project Manager</td>
                    <td>: </td>
                </tr>
                <tr>
                    <td>Supervisor</td>
                    <td>: </td>
                </tr>
                <tr>
                    <td>Second Marker</td>
                    <td>: </td>
                </tr>
            </tbody>
        </table>        
      </main>
        
    )
}