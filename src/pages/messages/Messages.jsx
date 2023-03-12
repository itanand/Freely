import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anand",
    isSeller: true,
  };

  const message = `Hi! How arw You? What are you doing Now? What's Going on? How about your day man?`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Akash Mahto</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 17)}...
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Sadanand</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(17, 40)}...
              </Link>
            </td>
            <td>2 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Ashish</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(40, 57)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Vishal</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(58, 81)}...
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Abhishek</td>
            <td>{message.substring(0, 40)}</td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;