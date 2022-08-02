import { reducer } from './categories.reducer';
import { initialCategoryState } from './category.state';

describe('Stories Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialCategoryState, action);

      expect(result).toBe(initialCategoryState);
    });
  });
});



