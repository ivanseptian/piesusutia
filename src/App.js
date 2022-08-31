import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-3.jpg';
import product4 from './images/product-4.jpg';
import product5 from './images/product-5.jpg';
import service from './images/service-1.jpg';
import service2 from './images/service-2.jpg';
import service3 from './images/service-3.jpg';
import logo from './images/logo.jpg';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Pie Susu Original",
      price: "3K",
      image: product1
    },
    {
      id: 2,
      name: "Pie Susu Cokelat",
      price: "3.5K",
      image: product2
    },
    {
      id: 3,
      name: "Pie Susu Almond",
      price: "4K",
      image: product3
    },
    {
      id: 4,
      name: "Pie Susu Keju",
      price: "4K",
      image: product4
    },
    {
      id: 5,
      name: "Pie Susu Kacang",
      price: "3.5K",
      image: product5
    },
  ])

  const [services] = useState([
    {
      id: 1,
      title: "Home Made",
      desc: "Produk olahan rumah yang dijamin tanpa bahan pengawet, pewarna atau zat berbahaya lain",
      image: service
    },{
      id: 2,
      title: "Kualitas Terjaga",
      desc: "Kami selalu menggunakan bahan baku yang berkualitas demi menciptakan produk yang terpercaya",
      image: service2
    },{
      id: 3,
      title: "Selalu Fresh",
      desc: "Dengan sistem purchase order, kami yakin produk yang kamu terima akan selalu dalam keadaan fresh",
      image: service3
    }
  ])
  return (
    <Routes>
      <Route path="/" element={<Layout logo={logo} />} >
        <Route index element={<Home products={products} services={services} />} />
      </Route>
    </Routes>
  );
}

export default App;
