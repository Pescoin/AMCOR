import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getMaterials } from '../api/firebase';
import MaterialCard from './MaterialCard';
import { BsSearch } from 'react-icons/bs';

export default function Materials() {
  const {
    isLoading,
    error,
    data: materials,
  } = useQuery({ queryKey: ['materials'], queryFn: getMaterials });

  const [query, setQuery] = useState('');
  const filteredItems = materials?.filter((material) => {
    return material.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div className='mt-52'>
        <div className='flex justify-center items-center mt-6 '>
          <BsSearch className='p-2 bg-white text-black w-16 h-14 outline-none rounded-l-lg hidden md:flex ' />
          <input
            className='w-9/12 text-xl h-14 border-none md:text-3xl rounded-r-lg '
            value={query}
            type='search'
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search Material'
          />
        </div>
      </div>

      {filteredItems && (
        <div className='mr-4 mt-4 p-4 w-full flex justify-center border-b border-gray-400'>
          <p className='font-semibold text-2xl md:text-3xl'>
            {' '}
            <span className='text-green-300 text-2xl md:text-3xl'>
              {'   '}
              Searched : {filteredItems.length}
            </span>
            <span className='text-gray-400 text-2xl md:text-3xl'>
              {' '}
              &ensp; / &ensp;{' '}
            </span>
            Total : {materials.length}{' '}
          </p>
        </div>
      )}

      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
        {materials &&
          filteredItems.sort((a, b) => {
            return a.grade > b.grade ? 1 : -1;
          }) &&
          filteredItems.map((material, index) => (
            <MaterialCard key={material.id} material={material} index={index} />
          ))}
      </ul>
    </>
  );
}
