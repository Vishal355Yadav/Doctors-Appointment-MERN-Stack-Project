import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

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
