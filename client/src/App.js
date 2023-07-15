import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import Profile from './pages/doctor/Profile';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/Appointments';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import UserProfile from './pages/UserProfile';

function App() {
  const {loading}=useSelector(state => state.alerts)
  return (
   <>
    <BrowserRouter>
    {loading ? <Spinner/>: <Routes>
        <Route path='/' element= {
          <ProtectedRoute> 
            <HomePage/>
          </ProtectedRoute>}>

        </Route>
        <Route path='/apply-doctor' element= {
          <ProtectedRoute>
            <ApplyDoctor/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/notification' element= {
          <ProtectedRoute>
            <NotificationPage/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/admin/users' element= {
          <ProtectedRoute>
            <Users/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/admin/doctors' element= {
          <ProtectedRoute>
            <Doctors/>
          </ProtectedRoute>
        }>
        </Route>

        <Route path='/doctor/profile/:id' element= {
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/profile/:id' element= {
          <ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>
        }>
        </Route>


        <Route path='/doctor/book-appointment/:doctorId' element= {
          <ProtectedRoute>
            <BookingPage/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/appointments' element= {
          <ProtectedRoute>
            <Appointments/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/doctor-appointments' element= {
          <ProtectedRoute>
            <DoctorAppointments/>
          </ProtectedRoute>
        }>
        </Route>

        <Route path='/login' element= {
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }>
        </Route>
        <Route path='/register' element= { 
          <PublicRoute>  
            <Register/>
            </PublicRoute>}>
              
            </Route>
        </Routes>}
      
    </BrowserRouter>
   </>
  );
}

export default App;
