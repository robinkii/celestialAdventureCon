import conferenceRoom from '../assets/locationBackground.jpg';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const Location = () => {
  const building = `${faker.person.fullName()} Conference Center`;
  const address = faker.streetAddress();
  const suite = ` STE. ${faker.number(3)}`;
  const city = faker.city();
  const region = faker.state();
  const zip = faker.zipCode();

  return (
    <div className='w-full h-screen bg-slate-100'>
      <div
        className='w-full h-screen bg-no-repeat bg-cover bg-center'
        style={{
          backgroundImage: `url(${conferenceRoom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

export default Location;
