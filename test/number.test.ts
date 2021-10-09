/* eslint-disable array-callback-return */
/* global describe it expect */
import { sum } from '../src/number';

describe('check sum', () => {
  it('a and b is number', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
