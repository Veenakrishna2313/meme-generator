import ImageGenerator from "./imageGenerator";
import React,{useState} from "react";
import memesData from "../../memesData";

const Meme=()=>{
const {memes}=memesData.data;

//const [URL,setURL]=useState("http://i.imgflip.com/1bij.jpg");
const [meme,setMeme]=useState({
  topText:'',
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
  return(
    <div className="input-form">
      <div className="input-field">
         <input type="text" placeholder="Top Text"/>
         <input type="text" placeholder="Bottom Text"/>
      </div>
           <button onClick={getMemeImage} className="input-submit">Get a new meme image 🖼</button>
            <ImageGenerator URL={meme.randomImage}/>
    </div>
  )
}

export default Meme;