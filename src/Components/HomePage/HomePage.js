import React from 'react'

import Services from './Services/Services'
import Header from './Header/Header'
import Feedback from './Feedback/Feedback'
import Slider from './Slider/Slider'

import Footer from './Footer/Footer'


import Company from './Company/Company'

const HomePage = () => {
    document.title="HOME | CREATIVE AGENCY"
    return (
        <>
            <Header></Header>

            <Company></Company>

            <Services></Services>

            <Slider></Slider>

            <Feedback></Feedback>

            <Footer></Footer>
        </>
    );
};

export default HomePage;