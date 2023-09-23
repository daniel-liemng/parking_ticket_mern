import axios from 'axios';
import CreateTicket from '../components/CreateTicket';
import ParkingMap from '../components/ParkingMap';
import { useEffect, useState } from 'react';
import { Parking } from '../type/parking';
import { useAppStore } from '../context/store';

const HomePage = () => {
  const fetchAgain = useAppStore((state) => state.fetchAgain);

  const [parkings, setParkings] = useState<Parking[]>([]);

  // const [fetchAgain, setFetchAgain] = useState<boolean>(false);

  useEffect(() => {
    const fetchParkings = async () => {
      const { data } = await axios.get('/');
      setParkings(data);
    };

    fetchParkings();
  }, [fetchAgain]);

  console.log('88', parkings);
  return (
    <>
      <div className='flex flex-wrap gap-2'>
        <ParkingMap parkings={parkings} />
        <div className='flex-1'>
          <CreateTicket />
        </div>
      </div>
    </>
  );
};

export default HomePage;
