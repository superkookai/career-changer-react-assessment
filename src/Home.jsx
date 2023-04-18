import { useEffect, useState } from "react"
import Layout from "./Layout"
import Admin from "./Admin";
import User from "./User";


const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [employees,setEmployees] = useState([]);
  const [sector,setSector] = useState("");

  useEffect(()=>{
    setEmployees(mockEmployees);
  });
  
  if (sector === 'admin') {
    return (
      <Layout>
        <h1>Generation Thailand</h1>
        <h1>Home - Admin Sector</h1>
        <button onClick={()=>setSector('user')}>User Home Sector</button>
        <button onClick={()=>setSector('admin')}>Admin Home Sector</button>
        <Admin/>
      </Layout>
    )

  }else if (sector === 'user') {
    return (
      <Layout>
        <h1>Generation Thailand</h1>
        <h1>Home - User Sector</h1>
        <button onClick={()=>setSector('user')}>User Home Sector</button>
        <button onClick={()=>setSector('admin')}>Admin Home Sector</button>
        <User employees={employees}/>
      </Layout>
    )
  }else{
    return (
      <Layout>
        <h1>Generation Thailand</h1>
        <h1>React Assessment</h1>
        <button onClick={()=>setSector('user')}>User Home Sector</button>
        <button onClick={()=>setSector('admin')}>Admin Home Sector</button>
      </Layout>
    )
  }

}



export default Home
