import React from 'react';
import './App.css';

import Footer from './containers/footer/Footer';
import Blog from './containers/blog/Blog';
import Possibility from './containers/possibility/Possibility';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import Header from './containers/header/Header';
import Features from './containers/features/Features';

import Cta from './components/cta/Cta';
import Brend from './components/brend/Brend';
import Navbar from './components/navbar/Navbar';


// import { Footer,Blog,Possibility,WhatGPT3,Header,Feature } from 'D:/react/Projects/prec1/src/containers';
// import { Brend,Cta,Navbar } from 'D:/react/Projects/prec1/src/components';

const App = () =>  {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brend />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;
