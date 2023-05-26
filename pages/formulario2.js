import React from 'react';
import Form2 from '../components/Form2';
import Sidebar from '../components/Sidebar';

const Formulario2Page = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Form2 title="Buscar unidad académica por codigo o nombre" />  
        
      </div>
    </div>
  );
};

export default Formulario2Page;