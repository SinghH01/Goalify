import React, { useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import './chat.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import io from 'socket.io-client'


const socket = io.connect("http://localhost:8080")
function Chat(props) {

  const [user, setUser] = useRecoilState(userState);
  const [room, setRoom]= useState(props.id)
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([])

  const joinRoom = () => {
    if(user.first_name !== "" && props.id !== "") {
      socket.emit("join_room", room)
    }
  }
  joinRoom();

  const sendMessage = async() => {
    if(currentMessage !== "") {
      const messageData = {
        room: room,
        author: user.first_name,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("")
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]) 
    })
  },[socket])


  //joinRoom();
  return (
    <>
      <div className="chat-window">
      <h1>Chat</h1>
      <button onClick={joinRoom}> Join Chat {user.first_name}  Goal ID: {props.id}</button>



    <div className="chat-header">
      <p>Live Chat</p>
    </div>


    <div className="chat-body">
      <ScrollToBottom className="message-container">
          {
            messageList.map((messageContent)=> {
              return (
                <div className="message" id ={user.first_name === messageContent.author ? "you" : "other"}>
                  <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id= "time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                  </div>
                  
                </div>
              )
            })
          }     
        
      </ScrollToBottom>      
    </div>

    <div className="chat-footer">
    <input type="text" 
            placeholder="Hey..." 
            value={currentMessage}
            onKeyUp={(event) => {event.key === "Enter" && sendMessage();}}
            onChange={(event) => {
              setCurrentMessage(event.target.value)
            }}
    />
    <button onClick={sendMessage}>&#9658;</button>
    </div>
    </div>
    </>

  );
}

export default Chat;