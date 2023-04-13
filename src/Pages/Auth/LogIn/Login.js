import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import Header from "../../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import { user } from "../../../Context/Context";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ckek, setChek] = useState(false);
  const [Error, setError] = useState(false);

  // context
  const User = useContext(user);
  console.log(User);
  // Navigate
  const nav = useNavigate;

  async function handelsubmit(e) {
    e.preventDefault();
    setChek(true);
    try {
      const ApI = "http://127.0.0.1:8000/api/login";
      let res = await axios.post(ApI, {
        email: email,
        password: password,
      }); 
      const token = res.data.data.token;
      const Detiles = res.data.data.user;
      User.setAuth({ token, Detiles });
      nav("/dashboard");
    } catch (err) {
      if (err.response.status === 401) {
        setError(true);
      }
      setChek(true);
    }
  }

  // function change data form
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="app-parent">
        <div className="Register">
          <form onSubmit={handelsubmit}>
            <label htmlfor="name">Email : </label>
            <input
              type="text"
              id="Email"
              placeholder="Email..."
              value={email}
              onChange={handelEmail}
            />
            <label htmlfor="name">Password : </label>
            <input
              type="password"
              id="Password"
              placeholder="Password..."
              value={password}
              onChange={handelPassword}
            />
            {password.length < 8 && ckek && (
              <p> password must be more 8 char ! </p>
            )}
            <div className="submit">
              <button type="submit"> LogIn </button>
            </div>
            {Error && ckek && <p>Wrong Email OR Password ! </p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
