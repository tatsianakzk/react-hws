import React, { Component } from 'react';
import './App.css';
import Header from './Components/page_component/Header/Header';
import Main from './Components/page_component/Main/Main';
import Footer from './Components/page_component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;