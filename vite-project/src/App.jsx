import React from 'react';
import './App.css';
import Header from './Components/page_component/Header/Header';
import Footer from './Components/page_component/Footer/Footer';
import Home from './Components/Pages/Home/Home'
import Menu from './Components/Pages/Menu/Menu'
import Login from './Components/Pages/Login/Login';

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
};

export default App;