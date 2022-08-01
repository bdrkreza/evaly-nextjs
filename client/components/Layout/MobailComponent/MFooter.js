import React from "react";

export default function MFooter() {
  return (
    <>
      <nav className="mobile-bottom-menu fixed-nav-bottom  d-md-none d-lg-none">
        <div className="container px-3">
          <div className="d-flex justify-content-between py-3">
            <div className="bottom-menu-item">
              <span>
                <svg className="bi" width={16} height={16} fill="currentColor">
                  <use xlinkHref="images/icons/bootstrap-icons.svg#bag" />
                </svg>
              </span>
              <span className="menu-text"> Cart</span>
            </div>
            <div className="bottom-menu-item">
              <span>
                <svg className="bi" width={16} height={16} fill="currentColor">
                  <use xlinkHref="images/icons/bootstrap-icons.svg#bell" />
                </svg>
              </span>
              <span className="menu-text"> notification</span>
            </div>
            <div className="bottom-menu-item">
              <a href="#">
                <div className="botttom-menu-img">
                  <img src="images/icons/e-icon.png" alt />
                </div>
              </a>
            </div>
            <div className="bottom-menu-item">
              <span>
                <svg className="bi" width={16} height={16} fill="currentColor">
                  <use xlinkHref="images/icons/bootstrap-icons.svg#chat-left" />
                </svg>
              </span>
              <span className="menu-text"> Chat</span>
            </div>
            <div className="bottom-menu-item">
              <span>
                <svg className="bi" width={16} height={16} fill="currentColor">
                  <use xlinkHref="images/icons/bootstrap-icons.svg#three-dots" />
                </svg>
              </span>
              <span className="menu-text">Menu</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
