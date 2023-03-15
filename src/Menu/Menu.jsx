import React, { Fragment } from "react";
import Logo from "../assets/logo.png";
import './Menu.css';

const Menu = () => {
  return (
    <>
      <header className="headerMenu">
        <img className="logoMenu" src={Logo} alt="Logo Deli Burguer" />
        <a href="/" className="inicio">
          <h2>INICIO</h2>
        </a>
        <a href="/Order" className="pedidos">
          <h2>PEDIDOS</h2>
        </a>
      </header>
      <div className="sect-input">
        <input
          type="text"
          placeholder="Nombre del cliente"
          className="input-name"
        />
        <select name="numTable" className="num-table">
          <option disabled selected>Mesa</option>
          <option value="Mesa1">Mesa 1</option>
          <option value="Mesa2">Mesa 2</option>
          <option value="Mesa3">Mesa 3</option>
          <option value="Mesa4">Mesa 4</option>
          <option value="Mesa5">Mesa 5</option>
        </select>
      </div>
      <footer>©Copyright - Paola Quiroga - 2023</footer>
    </>
  );
};
export default Menu;
