import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsDataProvider } from './common/context/ProductsDataContext'
import { makeServer } from "./server";
import { ProductFilterProvider } from './common/context/ProductFilterContext';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsDataProvider>
      <ProductFilterProvider>
        <App />
      </ProductFilterProvider>
    </ProductsDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
