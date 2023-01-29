import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../Assests/images.png'
import './sidebar.css'
function Sidebar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <a href="index3.html" className="brand-link">
                <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">Apeda Traceability</span>
            </a>

            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">

                            <NavLink to='/trace' className="nav-link">
                                <p>
                                    Tracenet
                                </p>
                            </NavLink>

                        </li>
                        <li className="nav-item">

                            <NavLink to='/demo' className="nav-link">
                                <p>
                                    Demo
                                </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">

                            <NavLink to='/download' className="nav-link">
                                <p>
                                    Download File Formate
                                </p>
                            </NavLink>

                        </li>
                        <li className="nav-item">

                            <NavLink to='/upload_status' className="nav-link">
                                <p>
                                    File upload status
                                </p>
                            </NavLink>

                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    )
}

export default Sidebar
