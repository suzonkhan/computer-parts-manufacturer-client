import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './shared/Header';
import Footer from './shared/Footer';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './shared/RequireAuth';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';

function App() {
  return (
    <div className="page-wrapper">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="add-product" element={<RequireAuth><AddProduct /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
