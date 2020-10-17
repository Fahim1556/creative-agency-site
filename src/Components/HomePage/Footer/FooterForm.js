import React from 'react';

const FooterForm = () => {
    return (
        <div className="container height-110">
            <div className="row mb-5">
                <div className="col-md-6 col-sm-12">
                    <h2>Let us handle your <br/> project, professionally.</h2>

                    <p className='text-secondery w-80 mt-5'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>

                <div className="col-md-6 col-sm-12">
                    <input className='form-control mb-3' placeholder='Your email address' type="text"/>
                    <input className='form-control mb-3' placeholder="Your name/company's name" type="text"/>
                    <textarea class="form-control" placeholder="Your Message " rows="4"></textarea>
                    <button className='btn btn-dark text-light px-5 mt-4'>SEND</button>
                </div>
            </div>

            <p className='text-center text-secondary small copyrightSpace'>copyright Orange labs 2020</p>      
        </div>
    );
};

export default FooterForm;