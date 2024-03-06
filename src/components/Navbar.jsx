import { Link } from "react-router-dom"

function Navbar () {
  return (
    <nav className="">
        <h1>Catatan Pribad</h1>
        <div>
            <button><Link to='/archived'>Arsipan</Link></button>
            <button><Link to='/'>Home</Link></button>
        </div>
    </nav>
  )
}

export default Navbar