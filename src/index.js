import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from './components/shareButton';
import AddPeople from './components/addPeoples';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Button />} />
        <Route path='/add' element={<AddPeople />} />
      </Routes>
    </BrowserRouter>
  </>
);
