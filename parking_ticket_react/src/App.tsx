import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTicket from './components/CreateTicket';
import ParkingMap from './components/ParkingMap';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Parking } from './type/parking';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

axios.defaults.baseURL = 'http://localhost:5000/api/parking';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Header />
        <DashboardPage />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <Toaster position='top-center' />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
