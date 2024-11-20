import "./App.css";
import React, { useState } from 'react';
import Sidemenu from "./Component/Sidemenu";
import gptlogo from "./imgs/chatgpt.svg";
import addbtn from "./imgs/add-30.png";
import msgIcon from "./imgs/message.png";
import home from "./imgs/home.svg";
import saved from "./imgs/bookmark.svg";
import rocket from "./imgs/rocket.svg";
import sendbtn from "./imgs/send.svg";
import userIcon from "./imgs/user-icon.png";
import gtplogoimg from "./imgs/chatgptLogo.svg";


function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const responses = {
    'what is programming': 'Programming is the process of creating a set of instructions for computers to perform specific tasks.',
    'how to use an api': 'Using an API involves sending requests to it and processing the responses. Typically, you would use an HTTP client like fetch or axios in JavaScript.',
    default: 'I am here to help! Please ask something else.'
  };

  const sendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [...messages, { sender: "user", text: userInput }];
      setMessages(newMessages);

      const response = responses[userInput.toLowerCase()] || responses.default;
      setMessages([...newMessages, { sender: "bot", text: response }]);
      setUserInput("");
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSidetop">
            <img src={gptlogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midbtn">
            <img src={addbtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button
              className="query"
              onClick={() => setUserInput('what is programming')}
            >
              <img src={msgIcon} alt="" />
              what is Programming
            </button>
            <button
              className="query"
              onClick={() => setUserInput('how to use an api')}
            >
              <img src={msgIcon} alt="" />
              How to use an API
            </button>
          </div>
        </div>
        <div className="lowerSide"></div>
        <div className="listItems">
          <img src={home} alt="" className="listItemImg" />
          Home
        </div>
        <div className="listItems">
          <img src={saved} alt="" className="listItemImg" />
          Saved
        </div>
        <div className="listItems">
          <img src={rocket} alt="" className="listItemImg" />
          Upgrade
        </div>
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((msg, index) => (
            <div key={index} className={`chat ${msg.sender === 'user' ? 'user' : ''}`}>
              <img className="chatimg" src={msg.sender === 'user' ? '' : gtplogoimg} alt="" />
              <p className="txt">{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="send" onClick={sendMessage}>
              <img src={sendbtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
