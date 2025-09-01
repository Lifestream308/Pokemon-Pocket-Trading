import { Route, Routes, useParams } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePageComponent from './components/HomePageComponent'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import { cardsImport } from './GPT-pokemonArray'
import { useState, useEffect } from 'react'

function App() {

  const [cards, setCards] = useState(cardsImport);

  const { copiesString } = useParams()

  useEffect(() => {
    if (!copiesString) return;

    const copiesArray = copiesString.split("").map(num => Number(num))

    setCards((prev) =>
      prev.map((card, index) => ({
        ...card,
        copies: copiesArray[index] || 0, 
      }))
    );
  }, [copiesString]);

  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={ <HomePageComponent cards={cards} setCards={setCards} /> } />
        <Route path='/:cardsURL' element={ <HomePageComponent cards={cards} setCards={setCards} /> } />
        <Route path='/about' element={ <AboutComponent /> } />
        <Route path='/contact' element={ <ContactComponent /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
