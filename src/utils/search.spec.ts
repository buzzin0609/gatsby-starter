import exp from 'constants';
import { searchArray } from './search';

describe('Search utils', () => {
  describe('searchArray(): ', () => {
    const items: any = [
      {
        name: 'fizz',
      },
      {
        name: 'buzz',
      },
      {
        name: 'foo',
      },
    ];

    it('should filter the items correctly', () => {
      const result = searchArray('fiz', items);

      expect(result).toEqual([{ name: 'fizz' }]);
    });

    it('should return more than one item when the search value matches', () => {
      const result = searchArray('zz', items);

      expect(result).toEqual(items.slice(0, 1));
    });

    it('should return no items when searchValue is blank', () => {
      const result = searchArray('', items);

      expect(result).toEqual([]);
    });
  });
});
