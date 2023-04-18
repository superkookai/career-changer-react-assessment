export default function Admin({employees,setEmployees}){
    return (
        <>
            <h3>Create User Here</h3>
            <form>
                <input type="text" placeholder="Name" required/>
                <input type="text" placeholder="Last Name" required/>
                <input type="text" placeholder="Position" required/>
                <button type="submit">Save</button>
            </form>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {
                    employees.map((employee) =>{
                        return (
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.position}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}