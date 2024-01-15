import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './components/Login'
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Header from './admin/Header';
// import Admin from './admin/admi
import User from './admin/User';
import ArtList from './components/ArtList';
import Admin from './admin/Admin';
import Staff from './staff/Staff';
import Customer from './customer/Customer';
import PlantAdd from './components/PlantAdd';
import ViewPlant from './components/ViewPlant';
// import Viewplants from './components/Viewplants';



function App() {
  return (
    <div className="App">
      <header>
         <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userprofile' element={<Profile/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/admin' element={<admin/>}/>
          {/* <Route path='/customer' element={<customer/>}/> */}
          <Route path='/user' element={<User/>}/>
          <Route path='/AdminDashboard' element={<Admin/>}/>
          <Route path='/StaffDashboard' element={<Staff/>}/>
          <Route path='/CustomerDashboard' element={<Customer/>}/>
          <Route path='/artistimg' element={<ArtList/>}/>
          <Route path='/plantadd' element={<PlantAdd/>}/>
          <Route path='/viewplant' element={<ViewPlant/>}/>


          
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
