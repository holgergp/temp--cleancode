const generateRandomInteger = function (
  lowerBoundInclusive: number,
  upperBoundExclusive: number,
  getRandomNumber: () => number = Math.random
): number {
  return Math.floor(
    getRandomNumber() * (upperBoundExclusive - lowerBoundInclusive)
  ) + lowerBoundInclusive;
};

export { generateRandomInteger };
