// Solution: For each digit of N, compute the total number of 7 that can appear on that digit.
// Time complexity: O(log10N)
// Space complexity: O(1)

function countDigitSeven(N) {
  if (N <= 0) return 0;

  const digit = 7;
  let count = 0;

  for (let m = 1; m <= N; m *= 10) {
    const quotient = N / m;
    const remainder = N % m;
    const curr_digit = parseInt(quotient % 10);
    const prev = parseInt(quotient / 10);

    if (curr_digit > digit) {
      count += (prev + 1) * m;
    } else if (curr_digit === digit) {
      count += prev * m + remainder + 1;
    } else {
      count += prev * m;
    }
  }

  return count;
}

module.exports = countDigitSeven;
