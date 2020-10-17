import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../images/logos/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faListAlt, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import MakeAdmin from './MakeAdmin'

import ServiceStatus from './ServiceStatus'

import AddService from './AddService'

const AdminDashboard = () => {

    document.title='ADMIN | DASHBOARD'
    const [Component, setComponent] = useState('serviceStatus')

    return (
        <div style={{ height: '100vh' }} className="container-fluid">

             {/* Head Section */}

            <div className="row d-flex flex-row align-items-center" style={{ height: '20vh' }}>

                <div className="col-md-3">
                    <Link to='/'><img height='60' src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9">

                    <div className="row d-flex flex-row justify-content-between">

                        <div className="col-md-3">
                            {Component === 'serviceStatus' && <h5>Service Status</h5>}
                            
                            {Component === 'addService' && <h5>Add New Service</h5>}

                            {Component === 'makeAdmin' && <h5>Make Admin</h5>}                            
                        </div>

                        <div className="col-md-3"><h5>Fahim Hasan</h5></div>
                    </div>
                </div>

            </div>
            {/* Body Section */}
            <div className="row" style={{ minHeight: '80vh' }}>
                <div className="col-md-3 h-100">
                    <ul className="nav flex-column w-75 mx-auto">
                        <li className="nav-item mb-2">
                            <Link onClick={() => setComponent('serviceStatus')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'serviceStatus' && 'active'}`} to="#">
                                <FontAwesomeIcon className='mr-2' icon={faListAlt}></FontAwesomeIcon> Service List</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link onClick={() => setComponent('addService')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'addService' && 'active'}`} to="#">
                                <FontAwesomeIcon className='mr-2' icon={faPlusCircle}></FontAwesomeIcon> Add Service</Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={() => setComponent('makeAdmin')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'makeAdmin' && 'active'}`} to="#">
                                <FontAwesomeIcon className='mr-2' icon={faUserPlus}></FontAwesomeIcon> Make Admin</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9" style={{ backgroundColor: '#E5E5E5', minHeight: '85vh' }}>

                    {Component === 'serviceStatus' && <ServiceStatus></ServiceStatus>}

                    {Component === 'addService' && <AddService></AddService>}
                
                    {Component === 'makeAdmin' && <MakeAdmin></MakeAdmin>}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;