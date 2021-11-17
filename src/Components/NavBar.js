import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import "../css/Navbar.css"
import { useNavigate, useParams } from 'react-router'

const NavBar = () => {
    const [search,setSearch]=useState('')
    const {rocket_name}=useParams()
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate(`/search/${search}`)

    }
    console.log(rocket_name)
    return (
           <div className="navbar">
                <ul className="navarea">
                     <Link to="/capsules"><li>Capsules</li></Link>
                     <Link to="/rockets"><li>Rockets</li></Link>
                 </ul>

                     <form onSubmit={handleSubmit}>
                         <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search"></input>
                     </form>
             </div>
    )
}

export default NavBar
