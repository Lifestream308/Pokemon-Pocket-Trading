import React from 'react'
import { useEffect } from 'react'
import HomePageComponent from './HomePageComponent'
import { useParams } from 'react-router-dom'

function WrapperHomeComponent({cards, setCards}) {

    const { cardsParam } = useParams()

    useEffect(() => {
        if (!cardsParam) return;
    
        const copiesArray = cardsParam.split("").map(num => Number(num))
    
        setCards((prev) =>
          prev.map((card, index) => ({
            ...card,
            copies: copiesArray[index] || 0, 
          }))
        );
      }, []);

  return (
    <HomePageComponent cards={cards} setCards={setCards} />
  )
}

export default WrapperHomeComponent