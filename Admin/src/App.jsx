import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
import {Routes, Route} from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <hr />
      <div className='app-content'>
        <SideBar />
        <Routes>
          <Route
            path='/add'
            element={<Add />}
          />
          <Route
            path='/list'
            element={<List />}
          />
          <Route
            path='/orders'
            element={<Orders />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
