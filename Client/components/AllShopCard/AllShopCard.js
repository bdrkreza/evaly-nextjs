import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
export default function AllShopCard({ data }) {
  const { img, name, price } = data;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ ...data }));
  };
  return (
    <>
      <div className="single-publication">
        <figure>
          <a href="#">
            <img className="w-100 h-100" src={img} alt="Publication Image" />
          </a>

          <ul>
            <li>
              <a href="#" title="Add to Favorite">
                <BsHeartFill />
              </a>
            </li>
            <li>
              <a href="#" title="Add to Compare">
                <FiRefreshCw />
              </a>
            </li>
            <li>
              <a href="#" title="Quick View">
                <i className="fa fa-search"></i>
                <FaSearch />
              </a>
            </li>
          </ul>
        </figure>

        <div className="publication-content">
          <span className="category">T-shirt</span>
          <h3>
            <a href="#">{name}</a>
          </h3>
          <ul>
            <li>
              <i className="icofont-star"></i>
            </li>
            <li>
              <i className="icofont-star"></i>
            </li>
            <li>
              <i className="icofont-star"></i>
            </li>
            <li>
              <i className="icofont-star"></i>
            </li>
            <li>
              <i className="icofont-star"></i>
            </li>
          </ul>
          <h4 className="price">
            ${price} <span>$299</span>
          </h4>
        </div>

        <div className="add-to-cart">
          <a className="default-btn" onClick={handleClick}>
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
