import { assert } from 'assertthat';
import { generateRandomPrime } from '../lib/generateRandomPrime';
import { isPrime } from '../lib/isPrime';

suite('generateRandomPrime', (): void => {
  test('returns a prime within the specified bounds.', async (): Promise<void> => {
    const randomPrime = generateRandomPrime(10_000, 100_000);

    assert.that(isPrime(randomPrime)).is.true();
    assert.that(randomPrime).is.atLeast(10_000);
    assert.that(randomPrime).is.atMost(99_999);
  });

  test('returns the smallest prime number if the lower bound gets selected.', async (): Promise<void> => {
    const randomPrime = generateRandomPrime(10_007, 100_000, (lowerBoundInclusive): number => lowerBoundInclusive);

    assert.that(randomPrime).is.equalTo(10_007);
  });

  test('returns the largest prime number if the upper bound gets selected.', async (): Promise<void> => {
    const randomPrime = generateRandomPrime(10_000, 99_992, (lowerBoundInclusive, upperBoundExclusive): number => upperBoundExclusive - 1);

    assert.that(randomPrime).is.equalTo(99_991);
  });
});
