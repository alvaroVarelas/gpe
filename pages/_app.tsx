import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

/* import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/index';
import Formulario1 from '../pages/formulario1';
import Formulario2 from '../pages/formulario2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario1" element={<Formulario1 />} />
        <Route path="/formulario2" element={<Formulario2 />} />
      </Routes>
    </Router>
  );
};

export default App;
 */