import React from 'react'

const ThreeColumnBlock = () => {
  return (
    <section className='threeColumnBlock'>
        <div className='threeColumnBlock__container flex'>
            <div className='threeColumnBlock__column w-[33%]'>
                <div className='threeColumnBlock__image'></div>
                <div className='threeColumnBlock__content px-4'>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisi aliquet nunc, eu tincidunt nisi nisl eu nisl. Aliquam erat volutpat.</h2>
                </div>
            </div>
            <div className='threeColumnBlock__column w-[33%]'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisi aliquet nunc, eu tincidunt nisi nisl eu nisl. Aliquam erat volutpat.</h2>
            </div>
            <div className='threeColumnBlock__column w-[33%]'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisi aliquet nunc, eu tincidunt nisi nisl eu nisl. Aliquam erat volutpat.</h2>
            </div>
        </div>
    </section>
  )
}

export default ThreeColumnBlock