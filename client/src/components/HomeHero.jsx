const HomeHero = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            Welcome to Celestial Adventure Con!
          </h1>
          <p className='mb-5'>
            Join us for a celestial journey at Celestial Adventure Con, the
            ultimate conference for interstellar travel enthusiasts. Explore the
            latest advancements in space exploration, connect with fellow space
            enthusiasts, and dive into the wonders of the universe. Get ready
            for an out-of-this-world experience!
          </p>
          <button className='btn btn-primary'>Buy Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
