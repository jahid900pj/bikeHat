import { RouterProvider } from 'react-router-dom';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
