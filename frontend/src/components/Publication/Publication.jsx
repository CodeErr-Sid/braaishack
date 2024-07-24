import React from 'react'
import './Publication.css'
import { assets } from "../../assets/assets";

const publications = [
  {
    id: 1,
    title: 'Lorem ipsum',
    date: '17 July 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: assets.update1, 
    imageAlt: 'Image description' 
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    date: '18 July 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: assets.update2, 
    imageAlt: 'Image description' 
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    date: '19 July 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: assets.update3, 
    imageAlt: 'Image description'
  }
];

export default function Publication() {
  return (
    <>
      <section className='updates'>
        <div className="publication-container">
          <div className="section-01">
            <h1>Latest Publications</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="section-02-container">
            {publications.map((publication, index) => (
              <div className="section-02" key={publication.id}>
                <img 
                  src={publication.imageSrc} 
                  alt={publication.imageAlt} 
                  className={index === 1 ? 'second-image' : ''}
                />
                <h1>{publication.title}</h1>
                <h1 className='date'>{publication.date}</h1>
                <p>{publication.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
