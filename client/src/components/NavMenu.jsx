const NavMenu = () => {
  return (
    <div className='navbar bg-[#190482]/20'>
      <div className='w-full h-full flex justify-end'>
        <ul className='px-8'>
          <li className='inline-block px-4 py-2 text-white hover:text-slate-500'>
            <a href='/home'>Home</a>
          </li>
          <li className='inline-block px-4 py-2 text-white hover:text-slate-500'>
            <a href='/home'>This Year's Location</a>
          </li>
          <li className='inline-block px-4 py-2 text-white hover:text-slate-500'>
            <a href='/home'>Food</a>
          </li>
          <li className='inline-block px-4 py-2 text-white hover:text-slate-500'>
            <a href='/home'>Events</a>
          </li>
          <li className='inline-block px-4 py-2 text-white hover:text-slate-500'>
            <a href='/home'>Speakers</a>
          </li>
          <li className='inline-block px-4 py-2 text-white hover:text-slate-500'>
            <a href='/home'>Schedule</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
