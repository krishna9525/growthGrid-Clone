import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import TenderList from "./components/TenderList/TenderList";
import Header from "./components/Header/Header"
import './App.css';
import Subscribe from "./pages/Subscribe/Subscribe"
import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Tenders from "./pages/Tenders/Tenders"
import StarGrid from "./pages/StarGrid/StarGrid"
import Contact from "./pages/Contact/Contact"
import Login from "./components/Auth/Login/Login"
import Signup from './components/Auth/Signup/Signup';
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Dummy from "./Services/Dummy"






function App() {
  const [getLocationVal, setGetLocationVal] = useState('')

  const getProp = (locationVal) => {
    setGetLocationVal(locationVal?.pathname)
  }
  const handlePopState = (locationVal) => {
    getProp()
  };
  
  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  });




  
  return (
    <div>
      <ScrollButton />
      {
        getLocationVal !== '/login' ?
          <>
            <Header />
            <Navbar />
          </>
          :
          ''

      }


      <Routes>
        <Route path="/login" element={<Login getProp={getProp} />}></Route>
        <Route path="/" element={<Tenders />}></Route>
        <Route path="/stargrid" element={<StarGrid />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/tenderList" element={<TenderList />}></Route>
      </Routes>
      <Dummy/>

      {
        getLocationVal !== '/login' ?
          <>
            <Footer />
          </>
          :
          ''

      }



    </div>
  );
}

export default App;