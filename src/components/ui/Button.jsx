import React from 'react';

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className='bg-brand text-white py-4 px-4 mt-2 rounded-sm hover:brightness-110 hidden md:block'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
