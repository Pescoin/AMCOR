import React from 'react';

export default function Banner() {
  return (
    <section className='h-36 relative'>
      <div className='w-full h-36 bg-cover bg-banner opacity-40'></div>
      <div className='absolute w-full top-8 text-center text-gray-50 drop-shadow-2xl'>
        <p className='text-2xl mb-5 font-bold lg:text-4xl'>
          Reducing Retained Foreign body
        </p>
        <p className='text-xl font-semibold lg:text-2xl'>For Patient Safety</p>
      </div>
    </section>
  );
}
