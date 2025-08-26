import { Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePageComponent from './components/HomePageComponent'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import { cardsImport } from './GPT-pokemonArray'
import { useState } from 'react'

function App() {

  const [cards, setCards] = useState(cardsImport);

  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={ <HomePageComponent cards={cards} setCards={setCards} /> } />
        <Route path='/about' element={ <AboutComponent /> } />
        <Route path='/contact' element={ <ContactComponent /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
