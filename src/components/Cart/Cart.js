import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import './Cart.css'
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const buy = () => {
    alert("Thankyou for shopping");
  };
  if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
    <CartProvider>
    <section className="container">
      <div className="row ">
        <div className="col-18">
          <h5>
            {" "}
          <h1> Cart ({totalUniqueItems}) total Item :({totalItems})</h1> 
          </h5>
          <table className="table table-light m-8 ">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.api_featured_image} style={{ height: "10rem" }} className="cart-image" />
                    </td>

                    <td><h1>{item.name}</h1></td>

                    <td><h1>{item.price}</h1></td>

                    <td><h1>Quantity : ({item.quantity})</h1></td>

                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-auto ms-auto">
            <h2> total price: {cartTotal} EGP</h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
            Clear Cart
          </button>
          <button onClick={buy} className="btn btn-primary ms-2">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </section>
    </CartProvider>
  );
};

export default Cart;
