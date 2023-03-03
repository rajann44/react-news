import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <NavBar/>
            <Routes>
              <Route path="/home" element={<News key="/home" pageSize='3' country='in' category='general'></News>} />
              <Route path="/business" element={<News key="/business" pageSize='3' country='in' category='business'></News>} />
              <Route path="/entertainment" element={<News key="/entertainment" pageSize='3' country='in' category='entertainment'></News>} />
              <Route path="/health" element={<News key="/health" pageSize='3' country='in' category='health'></News>} />
              <Route path="/science" element={<News key="/science" pageSize='3' country='in' category='science'></News>} />
              <Route path="/sports" element={<News key="/sports" pageSize='3' country='in' category='sports'></News>} />
              <Route path="/technology" element={<News key="/technology" pageSize='3' country='in' category='technology'></News>} />
            </Routes>
        </BrowserRouter>
      </>
    )
  }
}
