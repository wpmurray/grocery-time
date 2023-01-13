import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<ItemList/>} path='/' exact={true} />
            <Route element={<AddItem/>} path='/add' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;