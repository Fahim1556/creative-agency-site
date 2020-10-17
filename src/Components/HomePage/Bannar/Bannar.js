import React from 'react'
import bannar from '../../../images/logos/Frame.png'


const Bannar = () => {
    return (
        <div className="container">
            <div className="row h-110">
                <div className="col-md-6 col-sm-12">
                    <h2 className='font-weight-bolder display-5 mt-4'>Let’s Grow Your<br/>
                        Brand To The<br/>
                        Next Level</h2>

                        <p className='w-80 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus,magnam facilis error nisi exercitationem vel asperiores omnis laboriosam quam.Feugiat</p>
                        <button className='btn btn-dark text-light px-5'>HIRE US</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={bannar} className='img-fluid' alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Bannar;