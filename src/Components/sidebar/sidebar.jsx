import React from 'react'
import { NavLink } from "react-router-dom";
import dash_logo from '../../Assests/dash_logo.png'
import user_logo from '../../Assests/user_logo.jpg'
import './sidebar.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/fontawesome-free-regular';

function Sidebar() {
    const location = useLocation();
    let user_data = JSON.parse(localStorage.getItem('user_data'))

    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src={dash_logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Traceability</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    
                        <div className="image">
                            {/* <img src={user_logo} className="img-circle elevation-2" alt="User Image" /> */}
                            {/* <i className='fa fa-thin fa-user ' /> */}
                            <FontAwesomeIcon icon={faUserCircle} />
                                                    </div>
                        <div className="nav-link">
                            <Link to="/">{user_data.username}</Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="nav-icon fas fa-copy" />
                                    <p>
                                        User Settings
                                        <i className="fas fa-angle-left right" />
                                        {/* <span className="badge badge-info right">6</span> */}
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link  to="/user">Create Tracenet User</Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a  className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link  to="/user-update">Update Tracenet User</Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a  className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link  to="/user-detail">Tracenet User Details</Link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy" />
                                    <p>
                                        Certificates
                                        <i className="fas fa-angle-left right" />
                                        {/* <span className="badge badge-info right">6</span> */}
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link to="/tracenet">Tracenet</Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link to="/upload_status">Upload Status</Link>
                                        </a>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-header">EXAMPLES</li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <i className="nav-icon fas fa-calendar-alt" />
                                    <Link to="/download">Download File Formate</Link>
                                    {/* <span className="badge badge-info right">2</span> */}
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar
