
import Layout from "./Layout";
import kai from "./kai.jpeg";

const Owner = () => {

    return (
      <Layout>
        <div className="container mt-5 text-center">
          <h1>56_Weerawut(Kai/ไก่) Group S </h1>
          <img src={kai} style={{width:"200px"}} className="my-5 rounded"/>
          <h3>Short Biography</h3>
          <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </Layout>
    )
  }
  
  
  
  export default Owner;