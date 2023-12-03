import conferenceRoom from '../assets/locationBackground.jpg';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const Location = () => {
  const [location, setLocation] = useSate({
    building: `${faker.person.fullName()} Conference Center`,
    streetOne: faker.location.streetAddress(),
    streetTwo: `STE. ${faker.datatype.number({ min: 100, max: 999 })}`,
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
  });

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
