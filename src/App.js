import "./App.css";
import Sign from "./Pages/Auth/Signup/Sign";
import Login from "./Pages/Auth/LogIn/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Users from "./Pages/User/Users/Users";
import UpdateUsers from "./Pages/User/UpdateUsers/UpdateUsers";
import CreateUsers from "./Pages/User/CreateUsers/CreateUsers";
import RequireAuth from "./Pages/Auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Register" element={<Sign />} />
        <Route path="/Login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Users" element={<Users />} />
            <Route path="Users/:id" element={<UpdateUsers />} />
            <Route path="User/create" element={<CreateUsers />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
