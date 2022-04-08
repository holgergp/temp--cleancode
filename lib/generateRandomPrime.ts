import { generateRandomInteger as importedGenerateRandomInteger } from './generateRandomInteger';
import { isPrime } from './isPrime';

type GenerateRandomInteger = (lowerBoundInclusive: number, upperBoundExclusive: number) => number;

const generateRandomPrime = function (
  lowerBoundInclusive: number,
  upperBoundExclusive: number,
  generateRandomInteger: GenerateRandomInteger = importedGenerateRandomInteger
): number {
  const primes: number[] = [];

  for (let candidate = lowerBoundInclusive; candidate < upperBoundExclusive; candidate++) {
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  const randomIndex = generateRandomInteger(0, primes.length);
  const randomPrime = primes[randomIndex];

  return randomPrime;
};

export { generateRandomPrime };
