import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full p-5 bg-orange-300'>
      <Link to='/'>
        <h3 className='text-2xl font-bold uppercase text-gray-700'>
          Parking Ticket
        </h3>
      </Link>
      <Link to='/dashboard'>
        <h5 className='text-lg text-gray-700 font-semibold cursor-pointer hover:text-white'>
          Dashboard
        </h5>
      </Link>
    </div>
  );
};

export default Header;
