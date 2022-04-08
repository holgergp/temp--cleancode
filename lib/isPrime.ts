import { isDivisibleWithoutRemainder } from './isDivisibleWithoutRemainder';
import { isNaturalNumber } from './isNaturalNumber';

const isPrime = function (candidate: number): boolean {
  if (!isNaturalNumber(candidate)) {
    return false;
  }
  if (candidate < 2) {
    return false;
  }

  // See https://de.wikipedia.org/wiki/Primzahltest#Probedivision for details.
  const lowestDivisorToCheck = 2;
  const highestDivisorToCheck = Math.sqrt(candidate);

  for (let currentDivisor = lowestDivisorToCheck; currentDivisor <= highestDivisorToCheck; currentDivisor++) {
    if (isDivisibleWithoutRemainder(candidate, currentDivisor)) {
      return false;
    }
  }

  return true;
};

export { isPrime };
