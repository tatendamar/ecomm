import * as fromStories from './categories.actions';

describe('loadStoriess', () => {
  it('should return an action', () => {
    expect(fromStories.LoadCategories().type).toBe('[Stories] Load Storiess');
  });
});
