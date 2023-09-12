import { getpositions, checkvalue } from './keyboard'

describe('getpositions', () => {
  it('should return position in each element in the array', () => {
                             // 0  1  2  3  4  5  6  7  8  9
    const keyboard: number[] = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
    const positions = getpositions(keyboard);

    expect(positions).toEqual([1, 0, 2, 4, 6, 8, 9, 7, 5, 3]);
  });
});

describe('checkvalue', () => {
  it('should return the correct value', () => {
    const target: number = 1297;
    const keyboard: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const result = checkvalue(target, keyboard);

    expect(result).toBe(11); 
  });

  it('should return the correct value', () => {
    const target: number = 1297;
    const keyboard: number[] = [0, 1, 2, 9, 7, 5, 6, 3, 8, 4];

    const result = checkvalue(target, keyboard);

    expect(result).toBe(4); 
  });

});
