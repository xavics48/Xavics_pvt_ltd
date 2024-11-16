import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import CustomNavbar from './Components/common/Navbar';
import MainPage from './pages/MainPage';
function App() {
  return (
           <>
              <CustomNavbar/>
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
              </Routes>
           </>
  );
}

export default App;
