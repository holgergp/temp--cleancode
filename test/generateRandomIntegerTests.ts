import { assert } from 'assertthat';
import { generateRandomInteger } from '../lib/generateRandomInteger';
import { isInteger } from '../lib/isInteger';

suite('generateRandomInteger', (): void => {
  test('returns an integer within the specified bounds.', async (): Promise<void> => {
    const randomInteger = generateRandomInteger(23, 43);

    assert.that(isInteger(randomInteger)).is.true();
    assert.that(randomInteger).is.atLeast(23);
    assert.that(randomInteger).is.atMost(42);
  });

  test('returns the lower bound when the random number generator returns 0.', async (): Promise<void> => {
    const randomInteger = generateRandomInteger(23, 43, (): number => 0);

    assert.that(randomInteger).is.equalTo(23);
  });

  test('returns one less than the upper bound when the random number generator returns 0.999...', async (): Promise<void> => {
    const randomInteger = generateRandomInteger(23, 43, (): number => 0.999_999_999_999_999_9);

    assert.that(randomInteger).is.equalTo(42);
  });
});
