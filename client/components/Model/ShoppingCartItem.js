import React, { useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { ImMinus, ImPlus } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeFromProduct } from "../../redux/cartRedux";
export default function ShoppingCartItem({ cart }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const { name, img, price } = cart;

  return (
    <>
      <div className="d-flex justify-content-center row">
        <div className="row mb-2">
          <div className="col-md-5 col-lg-3 col-xl-3">
            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              <img className="img-fluid w-100" src={img} alt="cartImage" />
            </div>
          </div>

          <div className="col-md-7 col-lg-9 col-xl-9">
            <h5>{name}</h5>
            <div className="def-number-input number-input safari_only w-100">
              <div className="input-group">
                <span className="input-group-prepend">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-number"
                    data-type="minus"
                    data-field="quant[1]"
                    onClick={() => handleQuantity("dec")}
                  >
                    <ImMinus />
                  </button>
                </span>
                <input
                  type="text"
                  name="qyt"
                  className="form-control input-number text-center"
                  value={quantity}
                  min="1"
                  max="5"
                />
                <span className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-type="plus"
                    data-field="quant[1]"
                    onClick={() => handleQuantity("inc")}
                  >
                    <ImPlus />
                  </button>
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <a
                  type="button"
                  className=" text-uppercase text-danger mr-3"
                  onClick={() =>
                    dispatch(
                      removeFromProduct(cart.id, cart.price, cart.quantity)
                    )
                  }
                >
                  <FaTrashRestoreAlt />
                  Remove item
                </a>
              </div>
              <p className="mb-0">
                <span>
                  <strong>${price}</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className="mb-4" />
      </div>
    </>
  );
}
