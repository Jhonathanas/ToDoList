import React from "react";
import { Link } from 'react-router-dom'
function Percatatan({ id, title, body,createdAt }) {
   
  return (
      <div className="Percatatan">
         <h3 className="CatatanTitle">
          <Link to={`/catatan/${id}`}>{title}</Link>
         </h3>
       <p className="tanggal">{createdAt}</p>
       <p className="CatatanBody">{body}</p>
      </div>
    );
   }
export default Percatatan;
