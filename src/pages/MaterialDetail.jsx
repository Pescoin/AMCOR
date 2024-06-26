import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MaterialDetail() {
  const {
    state: {
      material: { title, img1, img2, grade },
    },
  } = useLocation();

  function textColor(grade) {
    let color = '';
    switch (Number(grade)) {
      case 1:
        color = 'text-grade1';
        break;
      case 2:
        color = 'text-grade2';
        break;
      case 3:
        color = 'text-grade3';
        break;
      case 4:
        color = 'text-grade4';
        break;
      case 5:
        color = 'text-grade5';
        break;

      default:
        color = 'text-grade1';
        break;
    }
    return color;
  }

  const selectedColor = textColor(grade);

  return (
    <>
      <section className='fixed top-24'>
        <div className='flex px-4 my-2 items-center justify-start'>
          <p className='text-2xl font-bold md:text-4xl'> ▪ {title}</p>
        </div>
        <div className='px-4 flex text-2xl font-bold gap-2 md:text-4xl'>
          <span>
            {' '}
            ▪<span className={selectedColor}>{`검출난이도: ${grade}등급`}</span>
          </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          <img className='w-full' src={img1.url} alt={title} />
          <img className='w-full' src={img2.url} alt={title} />
        </div>
      </section>
    </>
  );
}
