import { useEffect, useState } from 'react';
import CreateTicket from './components/CreateTicket';
import ParkingMap from './components/ParkingMap';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/parking';

const App = () => {
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      const { data } = await axios.get('/');
      setParkings(data);
    };

    fetchParkings();
  }, []);

  console.log('88', parkings);

  return (
    <>
      <div className='text-2xl text-center p-5 bg-orange-300 font-bold uppercase text-gray-700'>
        Parking Ticket
      </div>
      <div className='flex flex-wrap gap-2'>
        <ParkingMap parkings={parkings} />
        <div className='flex-1'>
          <CreateTicket />
        </div>
      </div>
    </>
  );
};

export default App;
