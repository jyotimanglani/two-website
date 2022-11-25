import React from "react";

import NavBar from "./Navbar"
import HeroSection from "./Herosection";
import AppSection from "./Appsection";
import CardSection from "./Cardsection";
import Footer from "./Footer";


const App = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />

            <CardSection />
            <AppSection />
            <footer />
    </div>
    );
};

export default App;
