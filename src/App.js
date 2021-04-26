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
            

            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <span className="copyright">Copyright &copy; Your Website 2019</span>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li className="list-inline-item">
                                    <a href="#something">Privacy Policy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
