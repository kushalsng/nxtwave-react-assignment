import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Resource from './pages/Resource/Resource';
import ResourceAdd from './pages/Resource/ResourceAdd';
import SignIn from './pages/Auth/SignIn';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderLayout from './layout/HeaderLayout';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <>
      <Routes>
        <Route element={<HeaderLayout />} >
          <Route path='/' element={<Resource />} />
          <Route path='/add' element={<ResourceAdd />} />
          <Route path='/signin' element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    <ToastContainer position='top-right' />
    </>
  );
}

export default App;
