import React, { useState } from 'react';

const CreateTicket = () => {
  const [carPlate, setCarPlate] = useState('');
  const [phone, setPhone] = useState('');
  const [duration, setDuration] = useState(0);
  const [parkingLot, setParkingLot] = useState();

  const handleCreate = (e) => {
    e.preventDefault();
  };

  return (
    <div className='m-5 bg-slate-50 p-4'>
      <h3 className='text-xl font-semibold text-center'>Buy a ticket</h3>
      <form onSubmit={handleCreate} className='mt-4'>
        <div className='mb-6'>
          <label
            htmlFor='plate'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Car Plate Number
          </label>
          <input
            type='text'
            value={carPlate}
            onChange={(e) => setCarPlate(e.target.value)}
            id='plate'
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
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Duration
          </label>
          <div className='flex gap-2 flex-wrap items-center'>
            <button
              type='button'
              onClick={() => setDuration(60)}
              className='p-3 bg-orange-200 rounded-md hover:bg-orange-300'
            >
              $3 / 1 Hour
            </button>
            <button
              type='button'
              onClick={() => setDuration(180)}
              className='p-3 bg-orange-200 rounded-md hover:bg-orange-300'
            >
              $5 / 3 Hours
            </button>
            <button
              type='button'
              onClick={() => setDuration(480)}
              className='p-3 bg-orange-200 rounded-md hover:bg-orange-300'
            >
              $10 / 8 Hours
            </button>
            <button
              type='button'
              onClick={() => setDuration(1440)}
              className='p-3 bg-orange-200 rounded-md hover:bg-orange-300'
            >
              $20 / All Day
            </button>
          </div>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Parking Lot
          </label>

          <select
            id='countries'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option>A1</option>
            <option>A1</option>
            <option>A1</option>
            <option>A1</option>
          </select>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
