import React from "react";
import "./Menu.css";


const OrderSummary = ({ addOrder }) => {

    const priceProducts = addOrder.map(product => {
        /* Valida si el producto es burrito y realiza la suma de sus adicionales + el precio del producto */
     if (product.price !== undefined) {
            return product.price * product.amount;
        }
        return 0;
    })
    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);
    // console.log(totalOrderPrice, 'precio')

    return (
        <>
            <section className="ResumenP">
                <h3 className="titleResumen">RESUMEN DEL PEDIDO</h3>
                {addOrder.map(product =>
                    <div key={product.id} >
                        <section className='product-summary'>
                            <p>{product.name}</p>
                            <p>{product.amount}</p>
                            <p>$ {product.price !== undefined ? product.price * product.amount : ''}</p>
                        </section>
                    </div>
                )}
                <div className='total-order-price'>
                    <h4>Total $ {totalOrderPrice}</h4>
                </div>
            </section>
        </>
    )

}

export default OrderSummary;