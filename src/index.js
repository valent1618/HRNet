import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import './styles/main.scss';

// Layouts
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// Pages
import Error404 from './pages/404';
import Create from './pages/Create';
import List from './pages/List';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/list' element={<List />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
