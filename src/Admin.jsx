import { useState } from "react"

export default function Admin({employees,setEmployees}){

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

    return (
        <>
            <h3>Create User Here</h3>
            <form onSubmit={addEmployee}>
                <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Last Name" required value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                <input type="text" placeholder="Position" required value={position} onChange={(e)=>setPosition(e.target.value)}/>
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