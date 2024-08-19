import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/Hero';
import SideNav from './components/SideNav/Sidenav'

function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection />
    {/* <SideNav /> */}
    {/* Other sections or components */}
    <Footer />
  </div>
  );
}

export default App;
