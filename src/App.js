import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
    const portfolioLinks = [
        {
            title: 'Threads',
            caption: 'Illustration'
        }, {
            title: 'Explore',
            caption: 'Graphic Design'
        }, {
            title: 'Finish',
            caption: 'Identity'
        }, {
            title: 'Lines',
            caption: 'Branding'
        }, {
            title: 'Southwest',
            caption: 'Website Design'
        }, {
            title: 'Window',
            caption: 'Photography'
        }, {
            title: 'Pizza',
            caption: 'I love pizza!'
        }
    ]

    return (
        <div className="App">
            <Navbar />

            <Header />

            <Services />

            <About />

            <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

            <Teams />

            <ContactUs />
            
            <Footer />
            
        </div>
    );
}

export default App;
