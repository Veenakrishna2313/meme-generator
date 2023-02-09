import Navbar from './Components/Navbar';
import Meme from './Components/meme';
import './App.css';
import data from '../memesData'

function App() {
  

  return (
    <div className="main-container">
      <Navbar/>
        <section className='meme-container'>
          <Meme memes={data}/>
        </section>
      
    </div>
  )
}

export default App
