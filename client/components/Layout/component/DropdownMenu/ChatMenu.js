import Image from "next/image";
import React from "react";
import chat from "../../../../public/images/icons/chat.png";
export default function ChatMenu({ setChatOpen }) {
  return (
    <>
      <div className="card">
        <h5 className="card-header" onClick={() => setChatOpen(false)}>
          Chat
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
                Chat
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                data-toggle="tab"
                href="#tabs-2"
                role="tab"
              >
                Invitations
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
              <div className="card py-3 px-5 ">
                <Image src={chat} alt="Home Page" width={100} height={100} />
                <div className="card-body text-center">
                  <h5 className="card-title">Please Login to Chat</h5>
                  <a href="#" className="btn btn-dark">
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tabs-2" role="tabpanel">
              <div className="card py-3 px-5 ">
                <div className="card-body text-center">
                  <h5 className="card-title">Please Login</h5>
                  <a href="#" className="btn btn-dark">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
