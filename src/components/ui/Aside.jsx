import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Aside() {
  const handleClick = (e) => {};

  const handleScroll = (e) => {};
  return (
    <button to='/' onClick={handleClick}>
      <div
        className='fixed right-20 bottom-16 w-10 h-10 text-4xl hidden md:block'
        id='homeScroll'
        onScroll={handleScroll}
      >
        <HiOutlineHome className='shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-full' />
      </div>
    </button>
  );
}
