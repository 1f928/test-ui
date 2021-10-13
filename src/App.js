import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import star from './assets/star.png';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <div className="content">
          <Switch>
            <Route path="/star/sun" component={Sun} />
            <Route path="/star" component={Star} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

function Nav(props) {
  
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/star">Star</Link>
      <Link to="/star/sun">Sun</Link>
    </div>
  );
}

const useMobileCheck = () => {
  const [width, setWidth] = useState();

  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < 768;
};

function Home(props) {

  const isMobile = useMobileCheck();

  return (
    <>
    <h2>UI TEST!</h2>
    { isMobile ? 'mobile' : 'not mobile' } - ({window.innerWidth}, {window.innerHeight})
    { document.documentElement.clientWidth }
    </>
  );
}

function Star(props) {

  return (
    <>
      <h2>Path Test! ✨</h2>
    </>
  );
}

function Sun(props) {

  return (
    <>
      <h2>Nested Path Test! 🌞</h2>
      <img src={star} alt="meaningful" />
    </>
  );
}

function Footer(props) {

  return (
    <div className="footer">
      <a href="https://github.com/1f928/test-ui/" target="blank">1f928 // test-ui</a>
    </div>
  )
}

export default App;
