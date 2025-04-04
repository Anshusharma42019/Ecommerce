import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// import './App.css';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

function Layout() {
  return (
    <>
   <Navbar/>
   <Outlet/>
  <Footer/>
    </>
  )
}

export default Layout;