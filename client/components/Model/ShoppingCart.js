/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";
export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div
        className="modal fade"
        id="cardModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="cartModel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-slideout modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header  d-flex">
              <div
                type="button"
                className=""
                data-dismiss="modal"
                aria-label="Close"
              >
                <GrClose />
              </div>
              <h4 className="modal-title" id="exampleModalLabel">
                My Cart
              </h4>
            </div>
            <div className="modal-body">
              <div className="container mt-1">
                {cart.cartItems.map((cart, index) => (
                  <ShoppingCartItem key={index} cart={cart} />
                ))}
              </div>
            </div>
            <div>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">The total amount of</h5>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Temporary amount
                      <span>${cart.cartTotalAmount}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>The total amount of</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${cart.cartTotalAmount}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-dark btn-block waves-effect waves-light"
                  >
                    go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
