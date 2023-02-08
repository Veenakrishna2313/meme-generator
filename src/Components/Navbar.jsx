import trollface from '../assets/Troll Face.png'

const Navbar=()=>{
  return(
    <div className="navbar" >
      <img className="navbar-image" src={trollface}/>
      <h1 className="navbar-heading">Meme Generator</h1>
    </div>
  )
}

export default Navbar;