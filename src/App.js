import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Booklist from './components/BookList';
import Categories from './components/Categories';
import store from './redux/configureStore';
import Navbar from './components/Navbar';

const app = () => (
  <Provider store={store}>
    <Navbar />
    <section className="section">
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </section>
  </Provider>
);

export default app;
