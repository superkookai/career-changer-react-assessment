export default function NavBar(){
    return (
        <div className="container bg-dark rounded d-flex align-items-center justify-content-between p-2">
            <a className="text-white text-decoration-none" href={'/'}>Generation Thailand</a>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link text-white" href={'/'}>Home</a></li>
                <li className="nav-item"><a className="nav-link text-white" href={'/Owner'}>Owner</a></li>
            </ul>
        </div>
    )
}