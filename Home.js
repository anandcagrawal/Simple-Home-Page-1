import React from 'react'
import Header from "./Header";
import Products from './Products';
import Footer from "./Footer";
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <Products />
                <Footer />
            </div>
        </>
    )
}

export default Home;
