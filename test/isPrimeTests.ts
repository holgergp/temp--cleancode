import { assert } from 'assertthat';
import { isPrime } from '../lib/isPrime';

suite('isPrime', (): void => {
  test('returns true for a prime number.', async (): Promise<void> => {
    assert.that(isPrime(23)).is.true();
  });

  test('returns true for two.', async (): Promise<void> => {
    assert.that(isPrime(2)).is.true();
  });

  test('returns false for a positive non-prime integer.', async (): Promise<void> => {
    assert.that(isPrime(16)).is.false();
  });

  test('returns false for a negative integer.', async (): Promise<void> => {
    assert.that(isPrime(-17)).is.false();
  });

  test('returns false for one.', async (): Promise<void> => {
    assert.that(isPrime(1)).is.false();
  });

  test('returns false for a decimal number.', async (): Promise<void> => {
    assert.that(isPrime(17.2)).is.false();
  });
});
