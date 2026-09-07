# DSA — Interview Problem-Solving Evidence

> A compact algorithm repository focused on reasoning, correctness, complexity and executable validation — not on collecting solved problems.

## 30-second read

The goal is to make each solution explainable in an interview:

**problem → assumptions → baseline → optimized approach → complexity → edge cases → executable proof**

## Current examples

- `FindFirstAndLastPositionInSortedArray.js` — binary-search boundaries
- `SearchInSortedArray.js` — search over sorted data
- `NumberOfIslands.js` — matrix/graph traversal

## Run online

**[Open the repository in StackBlitz](https://stackblitz.com/github/MountainBridge/DSA)** — browser-based JavaScript workspace.

**[Open in GitHub Codespaces](https://codespaces.new/MountainBridge/DSA)** — full browser IDE for running individual solutions.

For isolated interview snippets, you can also paste a solution into **[OneCompiler](https://onecompiler.com/javascript)** or **[JDoodle](https://www.jdoodle.com/online-compiler)**.

## Run locally

```bash
node FindFirstAndLastPositionInSortedArray.js
node SearchInSortedArray.js
node NumberOfIslands.js
```

## Interview standard

Every new problem should include:

1. Problem statement and assumptions
2. Brute-force baseline where useful
3. Optimized approach
4. Time and space complexity
5. Edge cases
6. Executable example/test
7. Why the chosen approach is appropriate

## CI

GitHub Actions performs JavaScript syntax validation on pull requests. The next evolution is to add deterministic test cases and coverage rather than treating syntax validity as correctness.

## Why this belongs in the portfolio

These are the same reasoning skills used in the larger systems: defining invariants, understanding state, choosing boundaries, reasoning about failure and proving behaviour with evidence.
