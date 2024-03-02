import React from "react";

function Percatatan({ id ,title, body, createdAt , archived, onDelete ,onArchivedHandler}) {
  const createdDate = new Date(createdAt);
  // Format tanggal sesuai dengan yang diinginkan (Kamis, 14 April 2022)
  const formattedDate = createdDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });  
  
    return (
      
      <div className="Percatatan">
        <div className="content">
          <h3 className="CatatanTitle">{title}</h3>
          <p className="tanggal">{formattedDate}</p>
          <p className="CatatanBody">{body}</p>
        </div>
        <div className="action">
          <button className='red' onClick={() => onDelete(id)}>Hapus</button>
          <button className='blue' onClick={() => onArchivedHandler(id)}>
            {archived ? "Pindahkan" : "Arsipkan"}
          </button>
        </div>
      </div>
    );
   }
export default Percatatan;
