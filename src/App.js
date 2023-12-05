import React, {useState, useRef} from "react";
import './App.css';
import { Auth } from './components/Auth';
import {Chat} from './components/Chat';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';

import Cookies from 'universal-cookie'
const cookies = new Cookies();


function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  const backButtonClick = () => {
    setRoom(null);
  }

  if (!isAuth) {
    return (
      <div>
      <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
     <div>
      {room ? <div> <Chat room={room}/>   <button onClick={backButtonClick} className="back-button">Back</button> </div> : <div className="room"> 
      <label>Enter Room Name:</label>
      <input className="new-message-input" ref={roomInputRef} placeholder="Room Name"></input>
      <button className="button" onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
      </div>} 
    
    

     <div className="sign-out">
      <button className="button" onClick={signUserOut}>Sign Out</button>
     </div>

     </div>

  )


}

export default App;
