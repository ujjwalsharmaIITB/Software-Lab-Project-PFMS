/*
    Created by Ujjwal Sharma ,
    23M0837 , 23M0837@iitb.ac.in
    github@ujjwalsharmaIITB
*/

/*
    This Component is used for Login and Signup Page
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Function will be used when sign-up button will be called
  async function callSignup() {
    console.log("called signup");
    setIsError(false);

    if (name === "") {
      setIsError(true);
      setErrorMessage("Name cannot be Empty");
      return;
    }

    if (username === "") {
      setIsError(true);
      setErrorMessage("Username Cannot be Empty");
      return;
    }
    if (password === "") {
      setIsError(true);
      setErrorMessage("Password Cannot be Empty");
      return;
    }

    const user = { name: name, username: username, password: password };

    const retDict = await axios.post("/api/addUser", user);
    const data = retDict.data;

    if (data.status == "success") {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("name", name);
      navigate("/home");
    } else {
      setIsError(true);
      setErrorMessage("Username Already Exists");
      return;
    }

    console.log("retDict", retDict);

    console.log("name , username , password ", name, username, password);
  }

  // Function will be used when login button will be called
  async function callLogin() {
    console.log("called Login");
    setIsError(false);

    if (username === "") {
      setIsError(true);
      setErrorMessage("Username Cannot be Empty");
      return;
    }
    if (password === "") {
      setIsError(true);
      setErrorMessage("Password Cannot be Empty");
      return;
    }

    const user = { name: name, username: username, password: password };

    const retDict = await axios.post("/api/login", user);
    if (retDict.status === 200) {
      const data = retDict.data;
      if (data.status == "success") {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("name", data.user[2]);
        navigate("/home");
      } else {
        setIsError(true);
        setErrorMessage("Invalid Username or Password");
        return;
      }
    } else {
      setIsError(true);
      setErrorMessage("Invalid Username or Password");
      return;
    }

    console.log("retDict", retDict);
    console.log("username , password", username, password);
  }

  // Function is used to set the value of the fields
  function setValueFromForm(event, setValueFunction) {
    setValueFunction(event.target.value);
  }

  return (
    <div className="login-signup">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
          {isError ? <div className="errorText">{errorMessage}</div> : <></>}
        </div>

        <div className="inputs">
          {/* For Name */}

          {action === "Sign Up" ? (
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                onChange={(event) => {
                  setValueFromForm(event, setName);
                }}
              />
            </div>
          ) : (
            <></>
          )}

          {/* For Username */}
          <div className="input">
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setValueFromForm(event, setUsername);
              }}
            />
          </div>
          {/* For Password */}
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setValueFromForm(event, setPassword);
              }}
            />
          </div>
          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                if (action === "Sign Up") {
                  callSignup();
                } else {
                  setAction("Sign Up");
                }
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                if (action === "Login") {
                  callLogin();
                } else {
                  setAction("Login");
                }
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
