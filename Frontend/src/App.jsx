import Navbar from './Components/NavBar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/Place-Order/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='/order'
          element={<PlaceOrder />}
        />
      </Routes>
    </div>
  );
};

export default App;
