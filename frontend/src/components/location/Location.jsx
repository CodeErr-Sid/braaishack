import React from 'react';
import './Location.css';

export default function Location() {
    const contentArray = [
        {
            leftNumber: '01',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '02',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '03',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '04',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '05',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        }
    ];

    return (
        <div className='section-section__container'>
            {contentArray.map((item, index) => (
                <div key={index} className='content-box'>
                    <div className='left-number'>
                        <h1>{item.leftNumber}</h1>
                    </div>
                    <div className='right-content'>
                        <h2>{item.rightTitle}</h2>
                        <p>{item.rightContent}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
