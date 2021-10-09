/* global describe it expect */
import { sum } from '../../src/util/number.util';

describe('Sum fuction', () => {
  it('args is number', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
