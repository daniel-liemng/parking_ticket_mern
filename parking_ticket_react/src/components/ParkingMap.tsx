import CarImg from '../assets/hatchback-top-view.png';
import { Parking } from '../type/parking';

interface ParkingMapProps {
  parkings: Parking[];
}

const ParkingMap = ({ parkings }: ParkingMapProps) => {
  return (
    <div className='h-[320px] w-[420px] bg-slate-400 m-5 p-[10px]'>
      <div className='grid grid-cols-5 w-full h-[150px]'>
        {parkings &&
          parkings.length > 0 &&
          parkings.slice(0, 5).map((parking) => (
            <div
              className='col-span-1 border-4 border-white border-t-0'
              key={parking._id}
            >
              <div className='flex justify-center items-center h-full'>
                <h3 className='text-xl font-semibold'>
                  {parking.occupied ? (
                    <img
                      src={CarImg}
                      className='w-full h-full object-contain'
                    />
                  ) : (
                    parking.title
                  )}
                </h3>
              </div>
            </div>
          ))}
      </div>
      <div className='grid grid-cols-5 w-full h-[150px]'>
        {parkings &&
          parkings.length > 0 &&
          parkings.slice(5, 10).map((parking) => (
            <div
              className='col-span-1 border-4 border-white border-b-0'
              key={parking._id}
            >
              <div className='flex justify-center items-center h-full'>
                <h3 className='text-xl font-semibold'>
                  {parking.occupied ? (
                    <img
                      src={CarImg}
                      className='w-full h-full object-contain'
                    />
                  ) : (
                    parking.title
                  )}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParkingMap;
