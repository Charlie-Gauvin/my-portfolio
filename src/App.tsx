import './index.css';
import'./fonts.css';

function App() {
  return (
    <div className='min-h-screen bg-background'> 
      <h1 className="font-syne text-[100px] font-bold text-btn">
        Bienvenue sur mon site !
      </h1>
      <p className="mt-4 font-rubik text-base text-secondary">
        Voici un paragraphe de texte utilisant la police Rubik. Profitez de votre visite !
      </p>
      <button className="btn">Button</button>
    </div>
  )
}

export default App
