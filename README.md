# DSA · Problem-solving notes in JavaScript

Small, readable solutions to classic interview problems. Each file links the problem, then the solution, with the key idea called out in comments.

| Problem | Pattern | Time | Space | File |
|---|---|---|---|---|
| [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Binary search, run twice (left-most / right-most) | O(log n) | O(log n) recursive | [`FindFirstAndLastPositionInSortedArray.js`](./FindFirstAndLastPositionInSortedArray.js) |
| [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Find the pivot, then binary search the correct half | O(n) to find pivot here, O(log n) search | O(1) | [`SearchInSortedArray.js`](./SearchInSortedArray.js) |
| [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Grid DFS, sink each island as you count it | O(rows × cols) | O(rows × cols) worst-case stack | [`NumberOfIslands.js`](./NumberOfIslands.js) |

## How I approach a problem

1. **Restate it** in one sentence and write 2-3 edge cases (empty input, one element, duplicates).
2. **Name the pattern** before coding: binary search, two pointers, sliding window, BFS/DFS, heap, DP.
3. **Write the simplest correct version**, then improve time or space if it matters.
4. **Say the complexity out loud** and why.

## Run a solution

```bash
node NumberOfIslands.js
```

## Next up

Sliding window, heaps (top-k), and interval problems. Rotated-array pivot search will move to O(log n).

---

Part of [Nidhi Verma's engineering notes](https://github.com/MountainBridge).
