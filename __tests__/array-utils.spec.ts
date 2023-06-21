import { ArrayUtils } from '../src/utils/array-utils';

describe('ArrayUtils.chunk', () => {
  test('Handles with size param properly', () => {
    expect(ArrayUtils.chunk<string | number>(['a', 2, 'c', 'd'], 2))
      .toStrictEqual([['a', 2], ['c', 'd']]);

    expect(ArrayUtils.chunk<string | number>(['a', 2, 'c', 'd'], 3))
      .toStrictEqual([['a', 2, 'c'], ['d']]);

    expect(ArrayUtils.chunk<string | number>(['a', 2, 'c', 'd'], 8))
      .toStrictEqual([['a', 2, 'c', 'd']]);
  });

  test('Handles with no size param properly', () => {
    expect(ArrayUtils.chunk<string | number>(['a', 2, 'c', 'd']))
      .toStrictEqual([['a'], [2], ['c'], ['d']]);
  });
});

describe('ArrayUtils.compact', () => {
  test('Removes falsey values', () => {
    expect(ArrayUtils.compact([0, 1, NaN, false, 2, '', undefined, 3, null]))
      .toStrictEqual([1, 2, 3]);
  });
});

describe('ArrayUtils.difference', () => {
  test('Returns all difference values', () => {
    expect(ArrayUtils.difference([0, 1, 2, 0], [1, 2, 3]))
      .toStrictEqual([0, 0, 3]);
  });
});

describe('ArrayUtils.intersection', () => {
  test('Returns all common values', () => {
    expect(ArrayUtils.intersection([0, 1, 2], [1, 2, 3]))
      .toStrictEqual([1, 2]);
  });
});

describe('ArrayUtils.zip', () => {
  test('Returns zipped arr', () => {
    expect(ArrayUtils.zip<any>(['a', 'b'], [1, 2], [true, false]))
      .toStrictEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('Throws the error when input items have different length', () => {
    expect(() => ArrayUtils.zip<any>(['a'], [1, 2]))
      .toThrow();
  });

  test('Returns an empty array with no arguments', () => {
    expect(ArrayUtils.zip<any>())
      .toStrictEqual([]);
  });
});