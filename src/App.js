import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Login from './Pages/Authentication/Login/Login'
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddReview from './Pages/AddReview/AddReview';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import AddCart from './Pages/AddCart/AddCart';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Services />}/>
            <Route path="addCart/:serviceId" element={<AddCart />}/>
              
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="myOrders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
            <Route path="review" element={<AddReview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
