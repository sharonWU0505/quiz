# Quiz

### Question

> Let g(N) be the count of numbers that contain a 7 when you write out all the numbers from 1 to N.
> For example:
>
> - g(7) = 1
> - g(20) = 2
> - g(70) = 8
> - g(100) = 20

Please answer the following tasks:

- What is g(1000)? Is **`300`**.
- Write a computer program to compute g(N) and the test cases to evaluate the program.

### Solution

- Main concept: For each digit of N, compute the total number of 7 that can appear on that digit.
- Explanation: For N = `abcde` and we're now looking at digit `c`
  - If `c` is larger than `7`, the total number is **(`abc` + 1) \* 100**
  - If `c` is equal to `7`, the total number is **`abc` \* 100 + `de` + 1**
  - If `c` is less than `7`, the total number is **`abc` \* 100**
