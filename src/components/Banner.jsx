import React from 'react';

export default function Banner() {
  return (
    <section className='h-36 relative'>
      <div className='w-full h-36 bg-cover bg-banner opacity-40'></div>
      <div className='absolute w-full top-8 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-4xl mb-5 font-bold'>
          Reducing Retained Foreign body
        </h2>
        <p className='text-2xl font-semibold'>For Patient Safety</p>
      </div>
    </section>
  );
}
