import React from 'react';
import filtros from './filtros.module.css';
import { FaRuler, FaGlobe, FaUsers, FaSearch } from 'react-icons/fa';

export default function Filtros() {
  return (
    <div className={filtros.container}>
      <div className={filtros.SelectContainer}>
        <select name="hrhrhr">
          <option value="">--</option>
          <option value="fadf">fadf</option>
          <option value="asdf">asdf</option>
        </select>

        <select name="Elementos">
          <option value="">Elementos mostrados</option>
        </select>

        <select name="Contiene">
          <option value="">Contiene:</option>
        </select>
        <div className={filtros.inputContainer}>
  <input type="text" className={filtros.inputA} placeholder="Buscar..." />
        <button className={filtros.buttonBuscar}><FaSearch/></button>
</div>

        
      <div className={filtros.buttonsContainer}>
       
      </div>
      </div>

    </div>
  );
}
