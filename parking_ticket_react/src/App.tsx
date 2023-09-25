import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

// axios.defaults.baseURL = 'http://localhost:5000/api/parking';
axios.defaults.baseURL = 'https://parking-ticket-mern.vercel.app/api/parking';

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
