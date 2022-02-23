import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function ShoppingCart() {
  const { products, isLoading, totalPrice, isOpenCart } = useContext(MyContext);

  return isLoading ? (
    <p className="shopping-cart">Loading...</p>
  ) : (
    <div className={`shopping-cart ${isOpenCart ? "open" : ""}`}>
      <div className="shopping-cart-body">
        {products.cart.item.map((product, index) => (
          <div className="cart-item" key={index}>
            <img src={product.image} alt="teste" className="img-item" />
            <div>
              <p className="name-item">{product.name}</p>
              <span className="qtd">Qtd.: {product.quantity}</span>
              <span className="price">{product.bestPriceFormated}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-cart-footer">
        <h3>Total do pedido: {totalPrice}</h3>
      </div>
      <div className="shopping-cart-botton">
        <button type="button" className="btn-finalize">
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
