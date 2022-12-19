import React from "react";
import {  Route, Routes } from "react-router-dom";
import  { Login } from "./Components/login";
import Dashboard from "./Components/dashboard";

import AddPage from "./Components/add";
import EditPage from "./Components/edit";
import Register from "./Components/register";
import NotFound from "./Components/notfound";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from './Components/chart';
import configureStore from './Components/redux/store/configureStore';

import { Provider } from 'react-redux';
import ProductTable from "./Components/ProductTable";

const store = configureStore();
function App() {

    return (
      <div className="App">
         <Provider store={store}>
       
          <Routes>  
            <Route exact path="/" element={<Login/>} />
            <Route  exact path="/dashboard" element={ <Dashboard /> } />
            <Route  exact path="/products" element={ <ProductTable /> } />
            <Route  path="/chart" element={ <Chart /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/addPost" element={<AddPage />} />
            <Route path="/editPost/:id" element={<EditPage />} />
            <Route path="*" element={NotFound} />
          </Routes>

          </Provider>,
        
      </div>
    );
    } 

export default App;
