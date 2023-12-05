import backgroundImage from '../assets/homeBackground.jpg';
import HeroContainer from '../components/HeroContainer';

const HomePage = () => {
  return (
    <div
      className='w-full h-screen m-0 p-0'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <HeroContainer />
    </div>
  );
};

export default HomePage;
