export default function NavBar(){
    return (
        <div className="container bg-dark rounded">
            <ul className="nav justify-content-end">
                <li className="nav-item"><a className="nav-link text-white" href={'/'}>Home</a></li>
                <li className="nav-item"><a className="nav-link text-white" href={'/Owner'}>Owner</a></li>
            </ul>
        </div>
    )
}