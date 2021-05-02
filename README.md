# Quiz

### Question

> Let g(N) be the count of numbers that contain a 7 when you write out all the numbers from 1 to N.
> For example:
>
> - g(7) = 1
> - g(20) = 2
> - g(70) = 8
> - g(100) = 19

Please answer the following tasks:

- What is g(1000)? Is **`271`**.
- Write a computer program to compute g(N) and the test cases to evaluate the program.

### Solution

#### Main concept: find the pattern mathematically

- (1) Count of numbers from 0 to 9 containing digit 7: `1`
- (2) Count of numbers from 0 to 99 containing digit 7: `10 + 9 * 1`
  - `10` is the count of numbers start with 7, such as `70`, `71`, ...
  - `9` is the tens digit's possibilities, and `1` is from **(1)**
- (3) Count of numbers from 0 to 999 containing digit 7: `100 + 9 * 19`
  - `100` is the count of numbers start with 7, such as `700`, `701`, ...
  - `9` is the hundred digit's possibilities, and `19` is from **(2)**

In general, we can write

```
g(10^d) = 10^(d-1) + 9 * g(10^(d-1))
```

For algorithm, we can use dynamic programming for memorizing overlapping sub-problems.

#### Implementation on the Problem

> - `N` is the max number to check from 1
> - `target` is `7` in our case

1. Find N's **digit - 1**. Let this value be `d`.

   - For `816`, `d` is `2`.

2. Compute count of numbers with `target` from 1 to (10^d - 1).

   - Use the above formula to generate memorized values.

3. Find the Most Significant Digit (`msd`) of N.

   - For `816`, `msd` is `8`.

4. Calculate the count.
   - If `msd === 7` (ex: `731`), then count of numbers is sum of the following.
     - (1) count of numbers from 1 to 699
     - (2) count of numbers from 700 to 731, which is 32
   - If `msd > 7` (ex: `816`), then count of numbers is sum of the following.
     - (1) count of numbers from 1 to 699
     - (2) count of numbers from 700 to 799, which is 100
     - (3) count of numbers from 800 to 816, do recursion for 16
   - If `msd < 7` (ex: `654`), then count of numbers is sum of the following.
     - (1) count of numbers from 1 to 599
     - (2) count of numbers from 600 to 654, do recursion for 54

#### Evaluation

- Time complexity: O(log10N)
- Space complexity: O(log10N)

### Testing (with [Jest](https://jestjs.io/))

- Make sure that you've `node` and `npm` installed
  - Installing `node` and `npm` by [`nvm`](https://github.com/nvm-sh/nvm) is suggested.
- Set up: `npm install`
- Run the test: `npm test`
