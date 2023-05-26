import React, { useState } from 'react';

const Form2 = ({ title }) => {
  const [formData, setFormData] = useState({
    field1: '',
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <div className="form2">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="field1">Código/Nombre:</label>
        <input
          type="text"
          id="field1"
          name="field1"
          placeholder="Ingrese código o nombre"
          value={formData.field1}
          onChange={handleChange}
        />


        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form2;
