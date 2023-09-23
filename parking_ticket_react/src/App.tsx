import CreateTicket from './components/CreateTicket';
import ParkingMap from './components/ParkingMap';

const App = () => {
  return (
    <>
      <div className='text-2xl text-center p-5 bg-orange-300 font-bold uppercase text-gray-700'>
        Parking Ticket
      </div>
      <div className='flex flex-wrap gap-2'>
        <ParkingMap />
        <div className='flex-1'>
          <CreateTicket />
        </div>
      </div>
    </>
  );
};

export default App;
