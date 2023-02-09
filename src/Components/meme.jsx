import ImageGenerator from "./imageGenerator";

const Meme=(props)=>{
const {memes}=props.memes.data;

  const getMemeImage=()=>{
    
     const memeURL=memes[Math.floor(Math.random()*memes.length)].url;
    

    
  }
  return(
    <div className="input-form">
      <div className="input-field">
         <input type="text" placeholder="Top Text"/>
         <input type="text" placeholder="Bottom Text"/>
      </div>
           <button onClick={getMemeImage} className="input-submit">Get a new meme image 🖼</button>
     
    </div>
  )
}

export default Meme;