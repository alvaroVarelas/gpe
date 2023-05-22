import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <FontAwesomeIcon icon={faHome} /> Code - 
          Factory</div>
      <ul className="menu">
        <li>
          <Link href="/formulario1">
            <a>Gestionar unidad académica</a>
          </Link>
        </li>
        <li>
          <Link href="/formulario2">
            <a>Buscar unidad académica por nombre y 
              código</a>
          </Link>
        </li>
        <li>
          <Link href="/formulario3">
            <a>Agregar unidad académica</a>
          </Link>
        </li>
        <li>
          <Link href="/formulario4">
            <a>Actualizar información unidad     
              academica</a>
          </Link>
        </li>
        <li>
          <Link href="/formulario5">
            <a>Eliminar unidad académica</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
