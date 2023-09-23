import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import toast from 'react-hot-toast';
import { Parking } from '../type/parking';
import { useAppStore } from '../context/store';

const CreateTicket = () => {
  const [carPlate, setCarPlate] = useState('');
  const [phone, setPhone] = useState('');
  const [charge, setCharge] = useState(0);
  const [duration, setDuration] = useState(0);
  const [parkingLot, setParkingLot] = useState('');

  const [parkings, setParkings] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchAgain = useAppStore((state) => state.fetchAgain);
  const toggleFetchAgain = useAppStore((state) => state.toggleFetchAgain);

  useEffect(() => {
    const fetchAvailableParkings = async () => {
      try {
        const { data } = await axios.get('/available-parking');
        setParkings(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAvailableParkings();
  }, [fetchAgain]);

  const handleCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({ carPlate, phone, duration, parkingLot });

    if (!carPlate || !phone || !duration || !charge || !parkingLot) {
      return toast.error('Please fill all the fields');
    }

    try {
      setIsLoading(true);
      const { data } = await axios.patch(`/${parkingLot}`, {
        carPlate,
        phone,
        charge,
        duration,
        expiresAt: moment(new Date()).add(duration, 'm').toDate(),
        occupied: true,
      });
      console.log('OK', data);
      toast.success('Parking lot is booked');

      setCarPlate('');
      setPhone('');
      setCharge(0);
      setDuration(0);
      setParkingLot('');

      toggleFetchAgain();
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='m-5 bg-slate-50 p-4'>
      <h3 className='text-xl font-semibold text-center'>Buy a ticket</h3>
      <form onSubmit={handleCreate} className='mt-4'>
        <div className='mb-6'>
          <label
            htmlFor='carPlate'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Car Plate Number
          </label>
          <input
            type='text'
            value={carPlate}
            onChange={(e) => setCarPlate(e.target.value)}
            id='carPlate'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Car Plate Number'
            required
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Phone Number
          </label>
          <input
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id='phone'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Phone Number'
            required
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='duration'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Duration
          </label>
          <div className='flex gap-2 flex-wrap items-center'>
            <button
              type='button'
              onClick={() => {
                setDuration(60);
                setCharge(3);
              }}
              className={`p-3 bg-orange-200 rounded-md hover:bg-orange-400 ${
                duration === 60 && 'bg-orange-400 font-semibold'
              }`}
            >
              $3 / 1 Hour
            </button>
            <button
              type='button'
              onClick={() => {
                setDuration(180);
                setCharge(5);
              }}
              className={`p-3 bg-orange-200 rounded-md hover:bg-orange-400 ${
                duration === 180 && 'bg-orange-400 font-semibold'
              }`}
            >
              $5 / 3 Hours
            </button>
            <button
              type='button'
              onClick={() => {
                setDuration(480);
                setCharge(10);
              }}
              className={`p-3 bg-orange-200 rounded-md hover:bg-orange-400 ${
                duration === 480 && 'bg-orange-400 font-semibold'
              }`}
            >
              $10 / 8 Hours
            </button>
            <button
              type='button'
              onClick={() => {
                setDuration(1440);
                setCharge(20);
              }}
              className={`p-3 bg-orange-200 rounded-md hover:bg-orange-400 ${
                duration === 1440 && 'bg-orange-400 font-semibold'
              }`}
            >
              $20 / All Day
            </button>
          </div>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='parkingLot'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Parking Lot
          </label>

          <select
            id='parkingLot'
            onChange={(e) => setParkingLot(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value=''>Select a parking lot</option>
            {parkings.map((item: Parking) => (
              <option key={item._id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-700'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
