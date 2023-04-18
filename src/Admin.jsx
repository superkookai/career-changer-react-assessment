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
        setName('');
        setLastname('');
        setPosition('');
    }

    const deleteEmployee = (id)=>{
        const result = employees.filter((employee)=>{
            return employee.id !== id;
        });
        setEmployees(result);
    }

    return (
        <div className="container text-center">
            <h3 className="text-start">Create User Here</h3>
            <form className="d-flex" onSubmit={addEmployee}>
                <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                <input type="text" placeholder="Last Name" required value={lastname} onChange={(e)=>setLastname(e.target.value)}className="form-control"/>
                <input type="text" placeholder="Position" required value={position} onChange={(e)=>setPosition(e.target.value)}className="form-control"/>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            <table className="table table-bordered table-hover mt-5">
                <thead className="table-primary">
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-light text-start">
                {
                    employees.length > 0 && employees.map((employee) =>{
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.position}</td>
                                <td className="text-center">
                                    <button onClick={()=>deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}