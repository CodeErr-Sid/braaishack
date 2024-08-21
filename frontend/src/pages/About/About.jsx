import React from 'react';
import { assets } from '../../assets/assets';
import Header from '../../components/About-header/Header';
import './About.css';
import Details from '../../components/About-details/Details';
import Location from '../../components/location/Location';
import Promo from '../../components/About-promo/Promo';
import Features from '../../components/Features/Features';
import Publication from '../../components/Publication/Publication';
// import Preloader from '../../components/Preloader/Preloader';


export default function About() {


    return (
        
        <div className='about-section'>
            {/* <Preloader />  */}
            <Header header_title={'ABOUT US'} header_btn={'HOME/ABOUT US'} />
            <Details />
            <Location/>
            <Features />
            <Promo />
            <Publication/>

        </div>
    );
}
