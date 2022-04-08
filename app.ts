import { generateRandomPrime } from './lib/generateRandomPrime';

for (let i = 0; i < 1_000; i++) {
  const prime = generateRandomPrime(10_000, 99_999);

  process.stdout.write(`${prime} `);
}
