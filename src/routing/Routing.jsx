  import React from 'react'
  import { Route, Routes } from 'react-router-dom'
  import Register from '../authentication/Register';
  import Login from './../authentication/Login';
  import Home from './../components/Home';
  import Products from '../components/Products';
  import Users from './../components/Users';
  import Navbar from './Navbar';


  const Routing = () => {

    const PrivateRoute = ({ children }) => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      return isLoggedIn ? children : <Navigate to="/login" />;
    };

    return (
      <div>
        
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Navbar />
              </PrivateRoute>
            }
          />
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/user" element={<Users/>}></Route>
        </Routes>
      </div>
    );
  }

  export default Routing