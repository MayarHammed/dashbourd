import React, { useContext, useEffect, useState } from "react";
import "./Users.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { user } from "../../../Context/Context";

function Users() {
  const [users, setUsers] = useState([]);
  const [effect, setEffect] = useState(0);

  const context = useContext(user);
  const Token = context.auth.token;

  // Fetch data user
  useEffect(() => {
    const UserApI = "http://127.0.0.1:8000/api/user/show";
    axios(UserApI, {
      headers: {
        Authorization: "Bearer" + Token,
      },
    })
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  }, [effect]);

  // delete items form users

  const handelDelete = async (id) => {
    try {
      const DeleteApI = `http://127.0.0.1:8000/api/user/delete/${id}`;
      const res = await axios.delete(DeleteApI, {
        headers: {
          Authorization: "Bearer" + Token,
        },
      });
      if (res.status === 200) {
        alert("Are You Sure To Delete ");
        setEffect((prv) => prv + 1);
      }
    } catch {
      console.log("none");
    }
  };

  const handelAlert = () => {
    alert("Are You Sure To Update ");
  };


  
  // refreashToken
  async function refreashToken() {
    try {
      await axios
        .post(`http://127.0.0.1:8000/api/refresh`, null, {
          headers: {
            Authorization: "Bearer" + Token,
          },
        })
        .then((data) =>
          context.setAuth((prev) => {
            return { ...prev, Token: data.data.token };
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  // Pass over user data item by item by map
  const showInformationUsers = users.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <button className="del" onClick={() => handelDelete(item.id)}>
          Delete
        </button>
        <Link to={`${item.id}`}>
          <button onClick={handelAlert} className="del">
            Update
          </button>
        </Link>
      </td>
    </tr>
  ));
  return (
    <div className="continer">
      <Fade right>
        <table>
          <thead>
            <tr className="thead-r">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{showInformationUsers}</tbody>
        </table>
        <button onClick={refreashToken}></button>
      </Fade>
    </div>
  );
}

export default Users;
