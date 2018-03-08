
jest.mock('../../services/galleryApi', () => ({
  add: jest.fn(() => Promise.resolve('PAYLOAD')),
  remove: jest.fn(() => Promise.resolve('PAYLOAD'))
}));
import { IMAGE_ADD, IMAGE_REMOVE, FILTER_APPLY } from './reducers';
import { applyFilter, addImage, removeImage } from './actions';

describe('images reducer', () => {

  it('adds an image', () => {
    const image = {};
    const { type, payload } = addImage(image);
    expect(type).toBe(IMAGE_ADD);
    return payload.then(result => {
      expect(result).toBe('PAYLOAD');
    });
  });

  it('removes an image', () => {
    const id = 'ID';
    const { type, payload } = removeImage(id);
    expect(type).toBe(IMAGE_REMOVE);
    return payload.then(result => {
      expect(result).toBe(id);
    });
  });

  it('applies a filter', () => {
    const filter = 'cheese';
    const { type, payload } = applyFilter(filter);
    expect(type).toBe(FILTER_APPLY);
    expect(payload).toBe(filter);
  });

});
