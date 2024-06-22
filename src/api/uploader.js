import axios from 'axios';

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  const { data } = await axios.post(
    process.env.REACT_APP_CLOUDINARY_URL,
    formData
  );
  return { publicId: data?.public_id, url: data?.secure_url };
}
