import React from 'react'
import { Link } from 'react-router-dom'
import { cardsImport } from '../GPT-pokemonArray'
import { useState } from 'react'

export default function HomePageComponent() {

  const [cards, setCards] = useState(cardsImport);

   const incrementCopies = (cardNumber) => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards[cardNumber - 1] = {
        ...newCards[cardNumber - 1], 
        copies: Math.min(9, newCards[cardNumber - 1].copies + 1), 
      };
      return newCards;
    });
  };

   const decrementCopies = (cardNumber) => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards[cardNumber - 1] = {
        ...newCards[cardNumber - 1], 
        copies: Math.max(0, newCards[cardNumber - 1].copies - 1), 
      };
      return newCards;
    });
  };

  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <div className='mt-2 text-center md:hidden'>
              <h1 className='text-2xl font-bold text-blue-700 md:hidden'>Pocket Trading</h1>
              <h2 className='font-extralight text-gray-600 text-base'>No account needed</h2>
            </div>
            <section>
              <div className='flex flex-wrap gap-x-16 gap-y-12'>
                {cards.map((card) => (
                  <div className='flex flex-col items-center gap-y-2' key={card.index}>
                    <div className='h-[11rem] w-[8rem] border-black border'></div>
                    <p className='text-sm'>#{card.index}</p>
                    <p className='text-xl'>{card.name}</p>
                    <p className='text-sm'>{card.rarity.value} {card.rarity.type}</p>
                    <div className='flex gap-6 text-xl'>
                      <p className='px-2 rounded-full border-black border' onClick={() => decrementCopies(card.index)}>-</p>
                      <p className=''>{card.copies}</p>
                      <p className='px-2 rounded-full border-black border' onClick={() => incrementCopies(card.index)}>+</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
      </div>
    </>
  )
}
