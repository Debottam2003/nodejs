import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null); // Hold socket in state

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    // Listen for messages from the server
    newSocket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message); // Emit the message to the server
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <h1>Chatting</h1>
        <div style={styles.chatArea}>
          {messages.map((msg, index) => (
            <h3 key={index} style={{...styles.message , backgroundColor: (index %2 == 0) ? "orange" : "#e1ffc7"}}>
              {msg}
            </h3>
          ))}
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSendMessage} style={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
    backgroundColor: "#f0f0f0",
  },
  chatContainer: {
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  chatArea: {
    width: "97%",
    height: "500px",
    backgroundColor: "rgb(131, 167, 239)",
    overflowY: "auto",
    marginBottom: "20px",
    borderRadius: "8px",
    padding: "10px",
  },
  message: {
    background: "#e1ffc7",
    padding: "10px",
    borderRadius: "5px",
    margin: "5px 0",
  },
  inputContainer: {
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginRight: "10px",
  },
  sendButton: {
    padding: "10px 20px",
    border: "none",
    background: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  sendButtonHover: {
    background: "#218838",
  },
};

export default App;
