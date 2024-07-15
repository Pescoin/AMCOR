import React from 'react';

export default function Banner() {
  return (
    <section className='h-20 relative top-20'>
      <div className='w-full h-40 bg-cover bg-banner opacity-40'></div>
      <div className='absolute w-full top-14 text-center text-gray-50 drop-shadow-2xl'>
        <p className='text-2xl my-5 font-bold md:text-4xl'>
          진료재료별 X-ray 검출 영상
        </p>
      </div>
    </section>
  );
}
