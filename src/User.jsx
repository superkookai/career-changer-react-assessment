export default function User({employees}){
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
            </tr>
            {
                employees.map((employee)=>{
                    return (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.position}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}