import React, { useState } from 'react';

const Form = ({ title }) => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    file: null,
    file1: null,
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
    <div className="form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="field1">Código:</label>
        <input
          type="text"
          id="field1"
          name="field1"
          placeholder="Ingrese codigo"
          value={formData.field1}
          onChange={handleChange}
        />

        <label htmlFor="field2">Nombre:</label>
        <input
          type="text"
          id="field2"
          name="field2"
          placeholder="Ingrese nombre"
          value={formData.field2}
          onChange={handleChange}
        />

        <label htmlFor="field3">Decano:</label>
        <input
          type="text"
          id="field3"
          name="field3"
          placeholder="Ingrese decano"
          value={formData.field3}
          onChange={handleChange}
        />
        
        <label htmlFor="field4">Descripción:</label>
        <textArea
          type="text"
          id="field4"
          name="field4"
          placeholder="Ingrese descripción"
          value={formData.field4}
          onChange={handleChange}
        />

        <label htmlFor="file">Acta entidad:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />

        <label htmlFor="file1">Acta Consejo académico:</label>
        <input
          type="file"
          id="file1"
          name="file1"
          onChange={handleFileChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

