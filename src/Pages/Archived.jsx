import CatatanList from "../components/CatatanList";

function Archived({data}){
    return(
        <>
            <h1>archived</h1>
            <CatatanList data={data} />
        </>
    )
}

export default Archived;