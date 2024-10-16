import React from 'react';
import filtros from './filtros.module.css';
import { FaRuler, FaGlobe, FaUsers } from 'react-icons/fa';
export default function Filtros() {
  return (
    <div className={filtros.container}>
      <div className={filtros.SelectContainer}>
        <select name="hrhrhr">
          <option value="">--</option>
          <option value="">--</option>
          <option value="fadf">fadf</option>
          <option value="asdf">asdf</option>
          <option value="">--</option>
        </select>

        <select name="Elementos">
          <option value="">Elementos mostrados </option>
        </select>

        <select name="Contiene">
          <option value="">Contiene:</option>
        </select>


        <input type="text" className={filtros.inputA} />
      <br /><br />
      <div className={filtros.buttonsContainer}>
        <button><FaRuler /> Regla</button>
        <button><FaGlobe /> Regla global</button>
        <button><FaUsers /> Grupo</button>
        <button className={filtros.buttonBuscar}>Buscar</button>
      </div>
      </div>

    </div>
  );
}
