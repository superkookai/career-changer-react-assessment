export default function User({employees}){
    return (
        <table className="table table-bordered table-hover">
            <thead className="table-primary">
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody className="table-light text-start">
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
            </tbody>
        </table>
    )
}