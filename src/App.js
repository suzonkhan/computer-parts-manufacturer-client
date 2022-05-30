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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile/MyProfile';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment/Payment';
import Blogs from './pages/Blogs/Blogs';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Users from './pages/Dashboard/Users/Users';

function App() {
  return (
    <div className="page-wrapper">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blogs />} /> 
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="about" element={<About />} />
        <Route path="purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="my-orders" element={<RequireAuth><MyOrders /></RequireAuth>} />
          <Route path="users" element={<RequireAuth><Users /></RequireAuth>} />
          <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>} />
          <Route path="add-product" element={<RequireAuth><AddProduct /></RequireAuth>} />
          <Route index element={<RequireAuth><MyProfile /></RequireAuth>} />
          <Route path="add-review" element={<RequireAuth><AddReview /></RequireAuth>} />
        </Route> 
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
