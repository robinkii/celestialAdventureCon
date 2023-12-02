import backgroundImage from '../assets/homeBackground.jpg';
import HomeHero from '../components/HomeHero';

const HomePage = () => {
  return (
    <div
      className='w-full h-screen m-0 p-0 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <HomeHero />
    </div>
  );
};

export default HomePage;
