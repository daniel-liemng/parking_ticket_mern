import axios from 'axios';
import CreateTicket from '../components/CreateTicket';
import ParkingMap from '../components/ParkingMap';
import { useEffect, useState } from 'react';
import { Parking } from '../type/parking';
import { useAppStore } from '../context/store';
import toast from 'react-hot-toast';

const HomePage = () => {
  const fetchAgain = useAppStore((state) => state.fetchAgain);

  const [parkings, setParkings] = useState<Parking[]>([]);

  // const [fetchAgain, setFetchAgain] = useState<boolean>(false);

  useEffect(() => {
    const fetchParkings = async () => {
      try {
        const { data } = await axios.get('/');
        setParkings(data);
      } catch (err) {
        console.log(err);
        toast.error('Something went wrong');
      }
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
