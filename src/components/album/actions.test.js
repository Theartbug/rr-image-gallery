jest.mock('../../services/galleryApi', () => ({
  load: jest.fn(() => Promise.resolve('PAYLOAD')),
  getAllAlbums: jest.fn(() => Promise.resolve('PAYLOAD'))
}));
import { ALBUM_LOAD, ALBUMS_LOAD } from './reducers';
import { loadAlbum, loadAlbums } from './actions';

describe('albums actions', () => {
  it('gets a single album', () => {
    const id = 'ID';
    const { type, payload } = loadAlbum(id);
    expect(type).toBe(ALBUM_LOAD);
    return payload.then(result => {
      expect(result).toBe('PAYLOAD');
    })
  });

  it('gets all albums', () => {
    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    return payload.then(result => {
      expect(result).toBe('PAYLOAD');
    })
  });
});