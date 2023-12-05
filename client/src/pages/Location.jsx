import conferenceRoom from '../assets/locationBackground.jpg';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const Location = () => {
  const venue = {
    name: `${faker.person.fullName()} Conference Center`,
    streetAddress: faker.location.streetAddress(),
    suite: `ste. ${faker.number.binary({ min: 100, max: 999 })}`,
    city: faker.location.city(),
    region: faker.location.state({ abbreviated: true }),
    zipcode: faker.location.zipCode(),
  };

  return (
    <div className='w-full h-screen bg-slate-100'>
      <div className='w-full h-screen'>
        <div
          className='hero min-h-screen'
          style={{ backgroundImage: `url(${conferenceRoom})` }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='mb-5 text-xl font-bold'>
                Join us here at Celstial Adventure Con
              </h1>
              <div className='mb-5 flex flex-col justify-center'>
                <p className='text-lg'>{venue.name}</p>
                <p className='text-lg'>{venue.streetAddress}</p>
                <p className='text-lg'>{venue.suite}</p>
                <p className='text-lg'>
                  {venue.city}, {venue.region} {venue.zipcode}
                </p>
              </div>
              <button className='btn btn-primary mb-5'>Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
