import React from 'react';
import Form from '../components/Form';
import Sidebar from '../components/Sidebar';

const Formulario1Page = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Form title="Agregar unidad académica" />  
      </div>
    </div>
  );
};

export default Formulario1Page;
