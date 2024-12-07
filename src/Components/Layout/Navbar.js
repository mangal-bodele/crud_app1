import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/Home">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Add">Add</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Show">Show</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/Update">Update</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Delete">Delete</NavLink>
                    </li> */}
                    
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar