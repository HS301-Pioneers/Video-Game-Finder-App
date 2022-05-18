import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Header';

import React from 'react';
import Footer from './Footer';
import Main from './Main';
import About from './About';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path='/'
            element={<Main />} ></Route>
          <Route path='/About'
            element={<About />} ></Route>

        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
