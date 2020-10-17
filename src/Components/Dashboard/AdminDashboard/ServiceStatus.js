import React from 'react';

const ServiceStatus = () => {
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <table className="table table-striped">
                <thead>
                    <tr className='row text-center'>
                        <th className="col-md-2">Name</th>
                        <th className="col-md-2">Email</th>
                        <th className="col-md-3">Serivce</th>
                        <th className="col-md-3">Project</th>
                        <th className="col-md-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row text-center'>
                        <td className="col-md-2">Fahim</td>
                        <td className="col-md-2">fahim@gmail.com</td>
                        <td className="col-md-3">Engineer</td>
                        <td className="col-md-3">Lorem ipsum dolor sit amit</td>
                        <td className="col-md-2">
                            <select className='form-control'>
                                <option selected>Pending</option>
                                <option value="Done">Done</option>
                                <option value="Ongoing">Ongoing</option>
                            </select>
                        </td>
                    </tr>

                    <tr className='row text-center'>
                        <td className="col-md-2">Aual</td>
                        <td className="col-md-2">aual@gmail.com</td>
                        <td className="col-md-3"> Creative Designer</td>
                        <td className="col-md-3">Lorem ipsum dolor sit amet</td>
                        <td className="col-md-2">
                        
                            <select className='form-control'>
                                <option selected>Pending</option>
                                <option value="Done">Done</option>
                                <option value="Ongoing">Ongoing</option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ServiceStatus;