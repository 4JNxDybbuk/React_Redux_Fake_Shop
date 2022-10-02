import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<ProductListing />} />
          <Route path='/product/:productID' element={<ProductDetails />} />
          <Route>Error! 404 Not Found</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
