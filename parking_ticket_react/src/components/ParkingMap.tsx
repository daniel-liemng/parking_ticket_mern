const ParkingMap = () => {
  return (
    <div className='h-[320px] w-[420px] bg-slate-400 m-5 p-[10px]'>
      <div className='grid grid-cols-5 w-full h-[150px]'>
        <div className='col-span-1 border-4 border-white border-t-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>A1</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-t-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>A2</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-t-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>A3</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-t-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>A4</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-t-0'>
          {' '}
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>A5</h3>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 w-full h-[150px]'>
        <div className='col-span-1 border-4 border-white border-b-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>B1</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-b-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>B2</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-b-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>B3</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-b-0 border-r-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>B4</h3>
          </div>
        </div>
        <div className='col-span-1 border-4 border-white border-b-0'>
          <div className='flex justify-center items-center h-full'>
            <h3 className='text-xl font-semibold'>B5</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingMap;