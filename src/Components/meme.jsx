import ImageGenerator from "./imageGenerator";
import React,{useState} from "react";
import memesData from "../../memesData";

const Meme=()=>{
const {memes}=memesData.data;

//const [URL,setURL]=useState("http://i.imgflip.com/1bij.jpg");
const [meme,setMeme]=useState({
  topText:"",
  bottomText:'',
  randomImage:"http://i.imgflip.com/1bij.jpg"
});
const [allMemeImages,setAllMemeImages]=useState(memes);


  const getMemeImage=()=>{

     const memeURL=allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url;
     setMeme((prevState)=>{
     return {...prevState,randomImage:memeURL}
     })
 }

 const handleChange=(event)=>{
  const {name, value}=event.target;
  setMeme((prevState)=>{
    return{
      ...prevState,
      [name]:value
    }
  })

 }
  return(
    <div className="input-form">
      <div className="input-field">
         <input type="text" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}/>
         <input type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
         <button onClick={getMemeImage} className="input-submit">Get a new meme image 🖼</button>
      </div>
           
           <div className="imageContainer">            
             <ImageGenerator URL={meme.randomImage}/>
             <h2 className="meme-text top">{meme.topText}</h2>
             <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
      </div>
           
  )
}

export default Meme;