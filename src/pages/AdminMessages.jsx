import React, { useEffect, useState } from "react";
import { getMessagesAPI, deleteMessageAPI } from "../service/allAPI";
import "./AdminMessages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await getMessagesAPI(); // axios response
      setMessages(res.data.reverse()); 
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this message?")) {
      await deleteMessageAPI(id);
      fetchMessages();
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="admin-container">
      <h2>User Messages</h2>
      {messages.length === 0 ? (
        <p className="no-messages">No messages yet.</p>
      ) : (
        <table className="message-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{msg.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminMessages;
