/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function CartModel() {
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
          className="modal-dialog modal-dialog-slideout modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                card model
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Explore the history of the classic Lorem Ipsum passage and
                generate your own text using any number of characters, words,
                sentences or paragraphs. Commonly used as placeholder text in
                the graphic and print industries, Lorem Ipsum s origins extend
                far back to a scrambled Latin passage from Cicero in the middle
                ages.
              </p>
              <p>
                Explore the history of the classic Lorem Ipsum passage and
                generate your own text using any number of characters, words,
                sentences or paragraphs. Commonly used as placeholder text in
                the graphic and print industries, Lorem Ipsum's origins extend
                far back to a scrambled Latin passage from Cicero in the middle
                ages.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
