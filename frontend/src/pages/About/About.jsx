import React from 'react';
import { assets } from '../../assets/assets';
import Header from '../../components/About-header/Header';
import './About.css';
import Details from '../../components/About-details/Details';
import Location from '../../components/location/Location';
import Promo from '../../components/About-promo/Promo';
import Features from '../../components/Features/Features';
import Publication from '../../components/Publication/Publication';


export default function About() {
    return (
        <div className='about-section'>
            <Header />
            <Details />
            <Location/>
            <Features />
            <Promo />
            <Publication/>

        </div>
    );
}
