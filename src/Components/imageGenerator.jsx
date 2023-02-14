
const ImageGenerator=(props)=>{

    return(
    <div className="imageContainer">
      <img src={props.URL} className="image-meme" />
    </div>
  )
}

export default ImageGenerator;