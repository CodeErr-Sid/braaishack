import React from 'react';
import { assets } from '../../assets/assets';
import Header from '../../components/About-header/Header';
import './About.css';
import Details from '../../components/About-details/Details';
import Location from '../../components/location/Location';
import Events_F from '../../components/Events_F/Events_F'
import Promo from '../../components/About-promo/Promo';


export default function About() {


    return (
        <div className='about-section'>
            <Header header_title={'ABOUT US'} header_btn={'HOME/ABOUT US'} />
            <Details />
            <Location/>
            <Events_F title={"Features Of Braai Shack"}/>
            <Promo />
        </div>
    );
}
