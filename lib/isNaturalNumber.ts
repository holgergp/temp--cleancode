import { isInteger } from './isInteger';

const isNaturalNumber = function (candidate: number): boolean {
  if (!isInteger(candidate)) {
    return false;
  }
  if (candidate < 1) {
    return false;
  }

  return true;
};

export { isNaturalNumber };
