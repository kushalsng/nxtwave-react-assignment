import { Route, Routes } from 'react-router-dom';
import './App.css';
import Resource from './pages/Resource/Resource';
import ResourceAdd from './pages/Resource/ResourceAdd';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderLayout from './layout/HeaderLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderLayout />} >
          <Route path='/' element={<Resource />} />
          <Route path='/add' element={<ResourceAdd />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    <ToastContainer position='top-right' />
    </>
  );
}

export default App;
