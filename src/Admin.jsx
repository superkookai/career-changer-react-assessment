import { useEffect, useState } from "react"

export default function Admin(props){

    const {employees,setEmployees} = props;

    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [position,setPosition] = useState('');

    const addEmployee = (e)=>{
        e.preventDefault();
        const newEmployee = {
            id: Math.floor(Math.random()*100),
            name: name,
            lastname: lastname,
            position: position
        }
        setEmployees([...employees,newEmployee]);
    }

    const deleteEmployee = (id)=>{
        const result = employees.filter((employee)=>{
            return employee.id !== id;
        });
        setEmployees(result);
    }

    return (
        <>
            <h3>Create User Here</h3>
            <form>
                <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Last Name" required value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                <input type="text" placeholder="Position" required value={position} onChange={(e)=>setPosition(e.target.value)}/>
                <button onClick={addEmployee}>Save</button>
            </form>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {
                    employees.length > 0 && employees.map((employee) =>{
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.position}</td>
                                <td><button onClick={()=>deleteEmployee(employee.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}