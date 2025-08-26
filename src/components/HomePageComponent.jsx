import React from 'react'
import { Link } from 'react-router-dom'
// import { cardsImport } from '../GPT-pokemonArray'
import { useState } from 'react'

export default function HomePageComponent({cards, setCards}) {

  const handleClickURL = () => {
    const url = cards.reduce((acc, card) => acc + card.copies.toString(), "")
    console.log(url)
  }

  const [filterOut, setFilterOut] = useState(
    {
      "1diamond" : false,
      "2diamond" : false,
      "3diamond" : false,
      "4diamond" : false,
      "1star" : false
    }
  );

  const filteredCards = cards.filter((card) => !filterOut[card.rarity.value + card.rarity.type])

  const handleCheckboxFilter = (key) => {
  setFilterOut(prev => ({
    ...prev, 
    [key]: !prev[key]
  }));
  };

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
            <div>
              <button className='px-4 py-2 rounded-lg bg-blue-500 text-white' onClick={() => handleClickURL()}>Create URL</button>
            </div>
            <div className='flex flex-col gap-1'>
              <p>Filters</p>
              {Object.keys(filterOut).map((key) => (
                <label key={key}>
                  <input className='mx-2'
                    type="checkbox"
                    checked={!filterOut[key]}
                    onChange={() => handleCheckboxFilter(key)}
                  />
                  Rarity {key}
                </label>
              ))}
            </div>
            <section>
              <div className='flex flex-wrap gap-x-16 gap-y-12'>
                {filteredCards.map((card) => (
                  <div className='flex flex-col items-center gap-y-2' key={card.index}>
                    <div className='h-[11rem] w-[8rem] border-black border'></div>
                    <p className='text-sm'>#{card.index}</p>
                    <p className='text-xl'>{card.name}</p>
                    <p className='text-sm'>{card.rarity.value} {card.rarity.type}</p>
                    <div className='flex gap-6 text-xl'>
                      <button className='px-2 rounded-full border-black border' onClick={() => decrementCopies(card.index)}>-</button>
                      <p className=''>{card.copies}</p>
                      <button className='px-2 rounded-full border-black border' onClick={() => incrementCopies(card.index)}>+</button>
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
