import React from 'react'
import Image from 'next/image'


// Expects a columns object with 3 column objects inside. 
// Each column should have:
// text: string
// image: string
// id: int
const ThreeColumnBlock = ({columns}) => {
  return (
    <section className='threeColumnBlock'>
        <div className='threeColumnBlock__container flex flex-col md:flex-row'>
            {columns.map((column) => {
                return(
                    <div className='threeColumnBlock__column w-full md:w-[33%] h-[300px] md:h-[500px] relative' key={column.id}>
                        <div className='threeColumnBlock__image z-1'>
                            <Image fill src={column.image} alt={column.text} size={'100vw'} className='z-1 object-cover'></Image>
                        </div>
                        <div className='relative threeColumnBlock__content px-8 h-full flex items-center justify-center z-2'>
                            <h2>{column.text}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ThreeColumnBlock