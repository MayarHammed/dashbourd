import "./Sign.css";
import Header from "../../../Components/Header/Header";
import { useContext, useState } from "react";
import { user } from "../../../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sign() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repate, setRepate] = useState("");
  const [ckek, setChek] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // context
  const User = useContext(user);
  console.log(User);

  const nav = useNavigate;

  async function handelsubmit(e) {
    e.preventDefault();
    setChek(true);
    try {
      const ApI = "http://127.0.0.1:8000/api/register";
      let res = await axios.post(ApI, {
        name: name,
        email: email,
        password: password,
        password_confirmation: repate,
      });
      const token = res.data.data.token;
      const Detiles = res.data.data.user;
      User.setAuth({ token, Detiles });
      nav("/dashboard");
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(true);
      }
      setChek(true);
    }
  }

  // function change data form
  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelRepate = (e) => {
    setRepate(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="app-parent">
        <div className="Register">
          <form onSubmit={handelsubmit}>
            <label htmlfor="name">Name : </label>
            <input
              type="text"
              id="name"
              placeholder="Name..."
              value={name}
              onChange={handelName}
            />
            {name === "" && ckek && <p> UserName is Required ! </p>}

            <label htmlfor="name">Email : </label>
            <input
              type="text"
              id="Email"
              placeholder="Email..."
              value={email}
              onChange={handelEmail}
            />
            {emailError && ckek && <p> The Email has already been taken ! </p>}

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
            <label htmlfor="name">Repate Password : </label>
            <input
              type="password"
              id="repate"
              placeholder="Rpeate Password..."
              value={repate}
              onChange={handelRepate}
            />
            {repate !== password && ckek && <p> password dosnt match ! </p>}
            <div className="submit">
              <button type="submit"> Register </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
