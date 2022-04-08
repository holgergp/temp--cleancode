import { assert } from 'assertthat';
import { isInteger } from '../lib/isInteger';

suite('isInteger', (): void => {
  test('returns true for a positive integer.', async (): Promise<void> => {
    assert.that(isInteger(23)).is.true();
  });

  test('returns true for a negative integer.', async (): Promise<void> => {
    assert.that(isInteger(-42)).is.true();
  });

  test('returns true for zero.', async (): Promise<void> => {
    assert.that(isInteger(0)).is.true();
  });

  test('returns false for a positive decimal number.', async (): Promise<void> => {
    assert.that(isInteger(17.2)).is.false();
  });
});
