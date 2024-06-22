import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getMaterials } from '../../api/firebase';
import MaterialCard from '../../components/MaterialCard';

export default function Materials() {
  const {
    isLoading,
    error,
    data: materials,
  } = useQuery({ queryKey: ['materials'], queryFn: getMaterials });

  const [query, setQuery] = useState('');
  const filteredItems = materials.filter((material) => {
    return material.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      {materials && (
        <p className='text-2xl font-semibold'>Total: {materials.length}</p>
      )}
      Search:
      <input
        value={query}
        type='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      {materials && (
        <p className='text-2xl font-semibold'>Total: {materials.length}</p>
      )}
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
        {materials &&
          filteredItems.map((material, index) => (
            <MaterialCard key={material.id} material={material} index={index} />
          ))}
      </ul>
    </>
  );
}
