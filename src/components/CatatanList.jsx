import React from "react";
import Percatatan from "./Percatatan";

function CatatanList({ data ,onDelete, onArchivedHandler }) {
    return (
        <div className="CatatanList">
        {
          data.map((d) => (
            <Percatatan key={d.id}
            onDelete={onDelete} 
            onArchivedHandler={onArchivedHandler}
            {...d}/>
          ))
        }
      </div>
    );
   }
export default CatatanList;
