import backgroundImage from '../assets/homeBackground.jpg';

const HomePage = () => {
  return (
    <div
      className='w-full h-screen m-0 p-0 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default HomePage;
