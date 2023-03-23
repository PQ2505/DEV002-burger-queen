import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import "./Menu.css";
import axios from "axios";
import AddProducts from "./AddProducts";
import OrderSummary from "./OrderSummary";
import AddToCart from "./AddToCart";

const Menu = () => {
  const [data, setData] = useState([]);
  const [addToOrder, setAddToOrder] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => res.data)
      .then((res) => {
        setData(res.products);
      });
  }, []);

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
          <option disabled value="Mesa">
            Mesa
          </option>
          <option value="Mesa1">Mesa 1</option>
          <option value="Mesa2">Mesa 2</option>
          <option value="Mesa3">Mesa 3</option>
          <option value="Mesa4">Mesa 4</option>
          <option value="Mesa5">Mesa 5</option>
        </select>
      </div>
      <section className="menu">
        <h4 className="hComida">MENÚ HAMBURGUESAS</h4>
        <section className="foodContainer">
          {data
            .filter((product) => product.category.includes("Comida"))
            .map((items) => (
              <div key={items.id} className="CardComidas">
                <img className="imgComida" src={items.img} alt="" />
                <p className="namec">{items.name}</p>
                <p className="namec">${items.price}</p>
                <AddProducts
                  dataProduct={items}
                  addOrder={addToOrder}
                  setAddOrder={setAddToOrder}
                />
              </div>
            ))}
        </section>
        <h4 className="hBebida">MENÚ BEBIDAS</h4>
        <section className="drinksContainer">
          {data
            .filter((product) => product.category.includes("Bebida"))
            .map((items) => (
              <div key={items.id} className="CardBebidas">
                <img className="imgBebida" src={items.img} alt="" />
                <p className="nameb">{items.name}</p>
                <p className="priceb">${items.price}</p>
                <AddProducts
                  dataProduct={items}
                  addOrder={addToOrder}
                  setAddOrder={setAddToOrder}
                />
              </div>
            ))}
        </section>

        <div className="order-summary">
          <OrderSummary addOrder={addToOrder} setAddOrder={setAddToOrder} />
        </div>
        <AddToCart addOrder={addToOrder} />
      </section>
      <footer>©Copyright - Paola Quiroga - 2023</footer>
    </>
  );
};
export default Menu;
