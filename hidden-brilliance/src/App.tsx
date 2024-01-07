import logo from '../src/logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import'./components/Footer.css';




import './App.css';

function App() {
  return (
    <div id="root" style={{ minHeight: '100vh', position: 'relative' }}>
    {/* <div className="App"> */}
      <Header />
      <Home />
      <Footer link={'https://open.spotify.com/artist/3aY5vFyTSP6wnIkddlb7lC?si=ByE0FTJlS8OsGzFms9w4oQ'} title={'Aaron Alexander Music'} />
    </div>
  );
}

export default App;
