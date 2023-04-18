import { useEffect, useState } from "react"
import Layout from "./Layout"
import Admin from "./Admin";
import User from "./User";


const mockEmployees = [
  {
    id: 0,
    name: "John",
    lastname: 'Smith',
    position: "Project Manager"
  },
  {
    id: 1,
    name: "Annabel",
    lastname: "Washington",
    position: "Software Engineer"
  },
  {
    id: 2,
    name: "Citra",
    lastname: "Young",
    position: "UX/UI Designer"
  },
]

const Home = () => {
  const [employees,setEmployees] = useState(mockEmployees);
  const [sector,setSector] = useState("");
  
  
  if (sector === 'admin') {
    return (
      <Layout>
        <div className="container mt-5 text-center">
          <h1>Generation Thailand</h1>
          <h1>Home - Admin Sector</h1>
          <button onClick={()=>setSector('user')} className="my-5 mx-5 btn btn-primary btn-lg">User Home Sector</button>
          <button onClick={()=>setSector('admin')} className="my-5 mx-5 btn btn-success btn-lg">Admin Home Sector</button>
          <Admin employees={employees} setEmployees={setEmployees} />
        </div>
      </Layout>
    )

  }else if (sector === 'user') {
    return (
      <Layout>
        <div className="container mt-5 text-center">
          <h1>Generation Thailand</h1>
          <h1>Home - User Sector</h1>
          <button onClick={()=>setSector('user')} className="my-5 mx-5 btn btn-primary btn-lg">User Home Sector</button>
          <button onClick={()=>setSector('admin')} className="my-5 mx-5 btn btn-success btn-lg">Admin Home Sector</button>
          <User employees={employees}/>
        </div>
      </Layout>
    )
  }else{
    return (
      <Layout>
        <div className="container mt-5 text-center">
          <h1>Generation Thailand</h1>
          <h1>React Assessment</h1>
          <button onClick={()=>setSector('user')} className="my-5 mx-5 btn btn-primary btn-lg">User Home Sector</button>
          <button onClick={()=>setSector('admin')} className="my-5 mx-5 btn btn-success btn-lg">Admin Home Sector</button>
        </div>
      </Layout>
    )
  }

}



export default Home
