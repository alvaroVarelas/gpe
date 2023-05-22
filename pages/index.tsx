import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Unidades académicas</h1>
      </div>
    </div>
  );
};

export default HomePage;
