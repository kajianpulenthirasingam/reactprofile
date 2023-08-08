import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import Navigation from './Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Route path="/" exact component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

