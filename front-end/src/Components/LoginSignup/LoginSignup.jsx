import React, { useState } from 'react'
import "./LoginSignup.css"

import usernameImg from "../Assets/username.png"
import passwordImg from "../Assets/password.png"


// Import Images

export const LoginSignup = () => {
    const [action , setAction] = useState("Login")

    function callSignup(){
        console.log("called signup")
    }
    function callLogin(){
        console.log("called Login")
    }

  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {/* For Name */}
            
            {action==="Sign Up" ? 
            <div className="input">
                <input type="text" placeholder='Name' />
            </div>
            : <></> }

            {/* For Username */}
            <div className="input">
                <input type="text" placeholder='Username' />
            </div>
            {/* For Password */}
            <div className="input">
                
                <input type="password" placeholder='Password' />
            </div>
        <div className="submit-container">
            <div className={action==="Login"?"submit gray" : "submit"} onClick={
                ()=>{
                    if(action==="Sign Up") {
                        callSignup();
                    } else {
                        setAction("Sign Up")
                    }
                }
            }>
                Sign Up
            </div>
            <div className={action==="Sign Up"?"submit gray" : "submit"} 
            onClick={
                    ()=>{
                        if(action==="Login") {
                            callLogin();
                        } else {
                            setAction("Login")
                        }
                    }
            }
            >
                Login
            </div>
        </div>

        </div>

    </div>
  )
}
