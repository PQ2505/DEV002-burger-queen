import React, { Fragment } from "react";
import Logo from "../assets/logo.png";
import Waiter from "../assets/mesero.png";
import Chef from "../assets/chef.png";
import './Home.css';

const Home = () => {
  return (
    <Fragment>
    <main className="mainHome">
      <section>
        <div>
          <h1>
            <img src={Logo} alt="Logo Deli Burger" className="logoHome"></img>
          </h1>
        </div>
      </section>
      <nav className="imagesH">
        <section className="menubk">
          <a href="/menu">
            <img className="btn-menu" src={Waiter} alt="Menú" />
          </a>
          <h3>MESERO</h3>
        </section>
        <section className="chefbk">
          <a href="/chef">
            <img className="btn-chef" src={Chef} alt="Chef" />
          </a>
          <h3>CHEF</h3>
        </section>
      </nav>
    </main>
    <footer>©Copyright - Paola Quiroga - 2023</footer>
    </Fragment>
  );
};
export default Home;
