import React from 'react';
import Link from 'next/link';

import './style.scss';

const Cta = ({text, link, ariaLabel}) => {
  return (
    <div className='cta'>
        {link ? <Link href={link} className='cta__link px-4 py-2 rounded-xl' aria-label={ariaLabel}>{text}</Link> : <p className='cta__text'>{text}</p>}
    </div>
  )
}

export default Cta;