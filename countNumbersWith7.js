function countNumbersWith7(N) {
  const target = 7;

  // base case
  if (N < target) {
    return 0;
  }

  // let d be N's digit - 1
  let d = Math.floor(Math.log10(N));

  // compute count of numbers from 1 to (10^digit - 1),
  const getMemorizedCounts = (digit) => {
    let memorizedCounts = new Array(digit + 1).fill(0);

    // base cases
    // memorizedCounts[0] = 0;
    memorizedCounts[1] = 1; // count of numbers with 7 from 0 to 9

    for (let i = 2; i <= digit; i++) {
      memorizedCounts[i] = Math.pow(10, i - 1) + memorizedCounts[i - 1] * 9;
    }

    return memorizedCounts;
  };

  const memorizedCounts = [...getMemorizedCounts(d)];

  // compute 10^d
  const base = Math.pow(10, d);

  // let msd be the most significant digit of N
  const msd = Math.floor(N / base);

  // If msd is 7 (ex: 731), then count of numbers is sum of the following.
  // (1) count of numbers from 1 to 699
  // (2) count of numbers from 700 to 731, which is 32
  if (msd === target) return msd * memorizedCounts[d] + (N % base) + 1;

  // If msd > 7 (ex: 816), then count of numbers is sum of the following.
  // (1) count of numbers from 1 to 699
  // (2) count of numbers from 700 to 799, which is 100
  // (3) count of numbers from 800 to 816, do recursion for 16
  if (msd > target) return (msd - 1) * memorizedCounts[d] + base + countNumbersWith7(N % base);

  // If msd < 7 (ex: 654), then count of numbers is sum of the following.
  // (1) count of numbers from 1 to 599
  // (2) count of numbers from 600 to 654, do recursion for 54
  return msd * memorizedCounts[d] + countNumbersWith7(N % base);
}

module.exports = countNumbersWith7;
