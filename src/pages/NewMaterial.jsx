import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewMaterial } from '../api/firebase';

export default function NewMaterial() {
  const [material, setMaterial] = useState({});
  const [materialImgs, setMaterialImgs] = useState(null);
  const [links, setLinks] = useState([]);
  const [success, setSuccess] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      let filesArr = Array.from(files || []);
      setMaterialImgs(filesArr);
      return;
    }
    setMaterial((material) => ({ ...material, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let arr = [];
      for (let i = 0; i < materialImgs.length; i++) {
        const data = await uploadImage(materialImgs[i]);
        arr.push(data);
      }
      setLinks(arr);
      addNewMaterial(material, arr);
      setIsLoading(false);
      setSuccess('성공적으로 물품이 추가되었습니다.');
      setTimeout(() => {
        setSuccess(null);
      }, 4000);
    } catch {}
    // 제품의 사진을 cloudinary 에 업로드 하고 url 획득
  };
  return (
    <section className='w-full text-center'>
      <h1 className='text-2xl font-bold my-4'>새로운 물품 등록</h1>
      {success && <p className='my-2'>✅ {success}</p>}
      {links &&
        links.length > 0 &&
        links.map((link, index) => {
          return (
            <div key={index}>
              <img className='w-96 mx-auto mb-2' src={link?.url} alt='rul' />
            </div>
          );
        })}

      <form className='flex flex-col px-12 ' onSubmit={handleSubmit}>
        <input
          className='bg-white'
          type='file'
          accept='image/*'
          name='file'
          required
          multiple
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={material.title ?? ''}
          placeholder='title'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={material.category ?? ''}
          placeholder='Category(Gauze/Sharps/Instrument/Surgical material)'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          value={material.location ?? ''}
          placeholder='Location(Skull / Chest / Abdomen / Extremities)'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='rosette'
          value={material.rosette ?? ''}
          placeholder='Rosette'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='grade'
          value={material.grade ?? ''}
          placeholder='Detection Difficulty Grade'
          required
          onChange={handleChange}
        />
        <p>{isLoading}</p>
        <Button
          text={isLoading ? '업로드 중....' : '물품 등록하기'}
          disabled={isLoading}
        />
      </form>
    </section>
  );
}
