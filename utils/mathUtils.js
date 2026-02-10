/**
 * Generate Fibonacci series up to n terms
 * @param {number} n - Number of terms
 * @returns {number[]} Fibonacci series
 */
function generateFibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  
  if (n === 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  
  return fib;
}

/**
 * Check if a number is prime
 * @param {number} num - Number to check
 * @returns {boolean} True if prime
 */
function isPrime(num) {
  if (!Number.isInteger(num)) return false;
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
}

/**
 * Filter prime numbers from array
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} Array of prime numbers
 */
function filterPrimes(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }
  
  return numbers.filter(num => {
    if (!Number.isInteger(num)) {
      throw new Error('All elements must be integers');
    }
    return isPrime(num);
  });
}

/**
 * Calculate GCD of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} GCD
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

/**
 * Calculate HCF (GCD) of array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} HCF
 */
function calculateHCF(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  
  for (let num of numbers) {
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error('All elements must be positive integers');
    }
  }
  
  return numbers.reduce((acc, num) => gcd(acc, num));
}

/**
 * Calculate LCM of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} LCM
 */
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Calculate LCM of array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} LCM
 */
function calculateLCM(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  
  for (let num of numbers) {
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error('All elements must be positive integers');
    }
  }
  
  return numbers.reduce((acc, num) => lcm(acc, num));
}

module.exports = {
  generateFibonacci,
  filterPrimes,
  calculateHCF,
  calculateLCM
};
