import WorkDetails from './WorkDetails';
import PageContent from '../../../data/page-content.json';

describe('PageContent', () => {
  it('myWorkArray has correct properties', () => {
    for (let work of PageContent.myWorkArray) {
      expect(work).toHaveProperty('title');
      expect(work).toHaveProperty('cardInfo');
      expect(work).toHaveProperty('imageFile');
      expect(work).toHaveProperty('about');
      expect(work).toHaveProperty('technologies');
    }
  })
  it('myWorkArray values are correct data type', () => {
    for (let work of PageContent.myWorkArray) {
      expect(typeof work.title).toBe('string');
      expect(typeof work.cardInfo).toBe('string');
      expect(typeof work.imageFile).toBe('string');
      expect(typeof work.about).toBe('string');
      expect(typeof work.technologies).toBe('object');
    }
  })
  it('myWorkArray images have either .png or .jpg extension', () => {
    for (let work of PageContent.myWorkArray) {
      expect(work.imageFile.substring(work.imageFile.length - 4)).toStrictEqual(expect.stringMatching(/\.jpg|\.png/));
    }
  })
});