import React from 'react'
import { Link } from 'react-router-dom'
import { cardsImport } from '../GPT-pokemonArray'
import { useState } from 'react'

export default function HomePageComponent() {

  const [cards, setCards] = useState(cardsImport);



  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <div className='mt-2 text-center md:hidden'>
              <h1 className='text-2xl font-bold text-blue-700 md:hidden'>Pocket Trading</h1>
              <h2 className='font-extralight text-gray-600 text-base'>No account needed</h2>
            </div>
            {/* <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/pexels1.jpg" alt="Picture of a classroom" />
              <div className='absolute inset-0 w-7/10 bg-gradient-to-r from-gray-900/90 to-gray-500/5'></div>
              <div className='absolute h-full flex flex-col top-0 justify-center left-[7%]'>
                <h3 className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>A place to learn,</h3>
                <h3 className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>play, and grow.</h3>
                <h3 className='mt-3 hidden font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>Dedicated to offering a loving,</h3>
                <h3 className='hidden font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>educational, and fun experience.</h3>
                <Link to='/contact' className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' href="">Call To Action</Link>
              </div>
            </section> */}

            <section>
              <div className='flex flex-wrap gap-x-16 gap-y-12'>
                {cards.map((card) => (
                  <div className='flex flex-col items-center gap-y-2' key={card.index}>
                    <div className='h-[11rem] w-[8rem] border-black border'></div>
                    <p className='text-sm'>#{card.index}</p>
                    <p className='text-xl'>{card.name}</p>
                    {/* <p>#{card.index}</p> */}
                    <p className='text-sm'>{card.rarity.value} {card.rarity.type}</p>
                    <div className='flex gap-6 text-xl'>
                      <p className='px-2 rounded-full border-black border'>-</p>
                      <p className=''>{card.copies}</p>
                      <p className='px-2 rounded-full border-black border'>+</p>
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
