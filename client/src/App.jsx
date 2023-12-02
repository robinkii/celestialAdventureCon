import NavMenu from './components/NavMenu';
import galaxy from './assets/galaxy.jpg';

function App() {
  return (
    <div
      className='w-full h-screen m-0 p-0 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      <NavMenu />
    </div>
  );
}

export default App;
