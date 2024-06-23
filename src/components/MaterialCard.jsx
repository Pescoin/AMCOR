import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MaterialCard({
  index,
  material,
  material: { id, title, img1, category, location, rosette, grade },
}) {
  const navigate = useNavigate();

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
      <li
        onClick={() => {
          navigate(`/materials/${id}`, { state: { material, index } });
        }}
        className='rounded-lg shadow-md overflow-hidden cursor-point transition-all hover:scale-105 border border-gray-700'
      >
        <img className='w-full' src={img1.url} alt={title} />
        <div className='mt-2 px-2 text-lg flex justify-center items-center p-1 '>
          <h3 className='font-bold text-2xl'>
            {`${index + 1}`}. {title}
          </h3>
        </div>
        <div className='my-2 px-2 text-gray-400 font-semibold p-1 '>
          <div className='flex justify-center'>
            {`종류: ${category}`}&nbsp;/&nbsp;{`부위: ${location}`}
            &nbsp;/&nbsp;
            {`로젯: ${rosette}`}&nbsp;/&nbsp;
            <span className={selectedColor}>{`검출난이도: ${grade}등급`}</span>
          </div>
        </div>
      </li>
    </>
  );
}
