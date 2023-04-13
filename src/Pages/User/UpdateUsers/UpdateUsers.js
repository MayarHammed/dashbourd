// import React, { useEffect, useState } from "react";
// import "./UpdateUsers.css";
// // import Form from "../../../Components/Form/Form";
// import Zoom from "react-reveal/Zoom";
// // import { useParams } from "react-router-dom";

// function UpdateUsers() {
//   // Name
//   const [name, setName] = useState("");
//   // Email
//   const [email, setEmail] = useState("");

//   // ************** fetsh id methods one ***************
//   // const param = useParams();

//   // ************** fetch id methods Tow ***************
//   const id = window.location.pathname.split("/").slice(-1)[0];

//   // Fetch data user
//   useEffect(() => {
//     const UserApI = `http://127.0.0.1:8000/api/user/showbyid/${id}`;
//     fetch(UserApI)
//       .then((res) => res.json())
//       .then((data) => {
//         setName(data[0].name);
//         setEmail(data[0].email);
//       });
//   }, []);

//   return (
    
//     <div className="app-bt">
//       <Zoom bottom>
//         <div className="app-parent">
//         <p className="h11">Update Users</p>
//           <Form
//             btn="Update"
//             name={name}
//             email={email}
//             point={`user/update/${id}`}
//             handellocalstoreg={false}
//             path="dashboard/Users"
            
//           />
//         </div>
//       </Zoom>
//     </div>
//   );
// }

// export default UpdateUsers;
