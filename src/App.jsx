import Navbar from './Components/Navbar';
import Meme from './Components/meme';
import './App.css';


function App() {
  

  return (
    <div className="main-container">
      <Navbar/>
        <section className='meme-container'>
          <Meme/>
        </section>
     </div>
  )
}

export default App
