import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  //   KEY: '40816428-8ff543c0077c3bf6c3247c305',
  params: {
    key: '40816428-8ff543c0077c3bf6c3247c305',
    q: 'cat',
    page: 1,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getAllImages = () => {
  return instance.get('/');
};
