import NavMenu from './components/NavMenu';
import HomePage from './pages/HomePage';
import Location from './pages/Location';

function App() {
  return (
    <div className='w-full h-screen'>
      <NavMenu />
      <HomePage />
      {/* <Location /> */}
    </div>
  );
}

export default App;
