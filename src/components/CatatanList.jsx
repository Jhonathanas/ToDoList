import Percatatan from "./Percatatan";

function CatatanList({ data }){
    return(
        <div className="list">
        <input type="search" />
            {
                data.map((d) =>(
                    <Percatatan key={d.id}
                    {...d}
                    />
                ))
            }
        </div>
    )
}

export default CatatanList;