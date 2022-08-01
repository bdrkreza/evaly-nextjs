/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
export default function SellSection() {
  return (
    <>
      <section className="sell-section my-3">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6 col-sm-6 pt-3">
              <Link href="/">
                <a>
                  <div className="sell-item shadow-sm ">
                    <div className="pt-4">
                      <button
                        className="btn-style"
                        style={{ background: "royalBlue" }}
                      >
                        Now
                      </button>
                      <p
                        className="my-2"
                        style={{ fontSize: 14, color: "#d0d3d6" }}
                      >
                        Samsung
                      </p>
                      <h5>
                        Samsung Galaxy A21s Smartphone 6.5" - 4GB RAM - 64GB ROM
                        - 48MP Camera
                      </h5>
                      <p>Smart Phone</p>
                      <h5>
                        Starting at{" "}
                        <span className="line-through">৳16999 </span> ৳10624
                      </h5>
                    </div>
                    <img
                      className="img-fluid sell-item-img"
                      src="images/sell/image-removebg-preview.png"
                      alt
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-6 col-sm-6 pt-3">
              <Link href="/">
                <a>
                  <div className="sell-item shadow-sm ">
                    <div className="pt-4">
                      <button
                        className="btn-style"
                        style={{ background: "#c9151b" }}
                      >
                        sale
                      </button>
                      <p
                        className="my-2"
                        style={{ fontSize: 14, color: "#d0d3d6" }}
                      >
                        Samsung
                      </p>
                      <h5>
                        Samsung Galaxy A21s Smartphone 6.5" - 4GB RAM - 64GB ROM
                        - 48MP Camera
                      </h5>
                      <p>Smart Phone</p>
                      <h5>
                        Starting at{" "}
                        <span className="line-through">৳16999 </span> ৳10624
                      </h5>
                    </div>
                    <img
                      className="img-fluid sell-item-img"
                      src="images/sell/image-removebg-preview.png"
                      alt
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
