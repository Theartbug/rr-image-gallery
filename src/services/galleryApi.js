const URL = 'https://image-gallery-server.herokuapp.com/api';
import { get, post, del } from './request';

const load = (albumId) => get(`${URL}/albums/${albumId}`);

const getAllAlbums = () => get(`${URL}/albums`);

const add = (image) => post(`${URL}/images`, image);


const remove = (id) => del(`${URL}/images/${id}`);

export default {
  add,
  load,
  getAllAlbums,
  remove
};