import { ALBUM_LOAD, ALBUMS_LOAD } from './reducers';
import galleryApi from '../../services/galleryApi';

export function loadAlbum(albumId) {
  return ({
    type: ALBUM_LOAD,
    payload: galleryApi.load(albumId)
  });
}
export function loadAlbums() {
  return ({
    type: ALBUMS_LOAD,
    payload: galleryApi.getAllAlbums()
  });
}