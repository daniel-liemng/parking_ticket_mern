import { useEffect, useState } from 'react';
import { useAppStore } from '../context/store';
import { Parking } from '../type/parking';
import axios from 'axios';
import moment from 'moment';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const fetchAgain = useAppStore((state) => state.fetchAgain);
  const toggleFetchAgain = useAppStore((state) => state.toggleFetchAgain);

  const [parkings, setParkings] = useState<Parking[]>([]);

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

  const handleParkOut = async (parkingLot: string) => {
    console.log('78', parkingLot);

    try {
      const { data } = await axios.patch(`/${parkingLot}/park-out`);
      console.log(data);

      toggleFetchAgain();
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='p-8'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Parking Lot
              </th>
              <th scope='col' className='px-6 py-3'>
                Plate Number
              </th>
              <th scope='col' className='px-6 py-3'>
                Phone
              </th>
              <th scope='col' className='px-6 py-3'>
                Start
              </th>
              <th scope='col' className='px-6 py-3'>
                End
              </th>
              <th scope='col' className='px-6 py-3'>
                Duration
              </th>
              <th scope='col' className='px-6 py-3'>
                Charge
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {parkings.length > 0 &&
              parkings.map((parking) => (
                <tr
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  key={parking._id}
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {parking.title}
                  </th>
                  <td className='px-6 py-4'>{parking.carPlate}</td>
                  <td className='px-6 py-4'>{parking.phone}</td>
                  <td className='px-6 py-4'>
                    {moment(parking.startsAt).format('DD-MM-YYYY, h:mm:ss a')}
                  </td>
                  <td className='px-6 py-4'>
                    {moment(parking.expiresAt).format('DD-MM-YYYY, h:mm:ss a')}
                  </td>
                  <td className='px-6 py-4'>{parking.duration}</td>
                  <td className='px-6 py-4'>
                    {parking.charge && `$${parking.charge}`}
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <button
                      type='button'
                      onClick={() => handleParkOut(parking.title)}
                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Park Out
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
