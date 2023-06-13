import { NumberUtils } from '../src/utils/number-utils';

describe('NumberUtils.clamp', () => {
  test('Handles upper value properly', () => {
    expect(NumberUtils.clamp(10, -5, 5))
      .toBe(5);
  });

  test('Handles lower value properly', () => {
    expect(NumberUtils.clamp(-10, -5, 5))
      .toBe(-5);
  });

  test('Handles in-range value properly', () => {
    expect(NumberUtils.clamp(1, -5, 5))
      .toBe(1);
  });
});

describe('NumberUtils.inRange', () => {
  test('Handles properly without end param', () => {
    expect(NumberUtils.inRange(2, 3))
      .toBe(true);
  });

  test('Handles properly with start param greater than end param', () => {
    expect(NumberUtils.inRange(3, 5, 1))
      .toBe(true);
  });

  test('Return false when number isn`t in range', () => {
    expect(NumberUtils.inRange(6, 5, 1))
      .toBe(false);
  });

  test('Handles properly with negative numbers', () => {
    expect(NumberUtils.inRange(-3, -5, 1))
      .toBe(true);
  });
});

describe('NumberUtils.randomInt', () => {
  test('Handles integers properly', () => {
    const result = NumberUtils.randomInt(1, 4);

    expect(typeof result).toEqual('number');
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThan(4);
    expect(Number.isInteger(result)).toBe(true);
  });
});

describe('NumberUtils.randomFloat', () => {
  test('Handles floating numbers properly', () => {
    const result = NumberUtils.randomFloat(0, 3.5);

    expect(typeof result).toEqual('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(3.5);
    expect(Number.isInteger(result)).toBe(false);
  });
})