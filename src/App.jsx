import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/NavBar/Layout';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/NavBar/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="members" element={<Members />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;