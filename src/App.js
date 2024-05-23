import { Route, Routes } from 'react-router-dom';
import './App.css';
import Resource from './pages/Resource/Resource';
import RequestResource from './pages/Resource/RequestResource';
import UserResource from './pages/Resource/UserResource';
import ResourceAdd from './pages/Resource/ResourceAdd';
import SignIn from './pages/Auth/SignIn';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent3 from './components/SampleFile3';
import HeaderLayout from './layout/HeaderLayout';


function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderLayout />} >
          <Route path='/' element={<Resource />} />
          <Route path='/request' element={<RequestResource />} />
          <Route path='/user' element={<UserResource />} />
          <Route path='/add' element={<ResourceAdd />} />
          <Route path='/signin' element={<SignIn />} />
          {/* <Route path="/test" element={<MyComponent3 />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
