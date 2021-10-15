import React from "react";
import { AiTwotoneBell } from "react-icons/ai";
export default function Notification({ setNotificationOpen }) {
  return (
    <div>
      <div className="card">
        <h5 className="card-header" onClick={() => setNotificationOpen(false)}>
          Notification
        </h5>
        <div className="card-body">
          <ul
            className="nav nav-tabs d-flex justify-contain-center align-items-center justify-content-around notification_btn "
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                data-toggle="tab"
                href="#tabs-1"
                role="tab"
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                data-toggle="tab"
                href="#tabs-2"
                role="tab"
              >
                News-Feed
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tabs-3" role="tabpanel">
              <div className="card px-5 py-3">
                <div className="card-body text-center ">
                  <div classNam="svg_icon">
                    <AiTwotoneBell />
                  </div>
                  <p className="card-text">No notification yet</p>
                </div>
                <p>
                  Stay tuned! Notification about your activity will show up here
                </p>
              </div>
            </div>
            <div className="tab-pane" id="tabs-4" role="tabpanel">
              <p>Second Panel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
