import { faker } from '@faker-js/faker';

const HeroContainer = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>{faker.lorem.sentence(3)}</h1>
          <p className='mb-5'>{faker.lorem.paragraph(3)}</p>
          <button className='btn btn-primary'>Buy Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
