import type { Equals } from "../Any/Equals";
/**
 * 从' T '中删除' A '项
 * @param T 要删除元素的元组
 * @param N 要删除的元素
 * @returns [[unknown[]]]
 * @example
 * ```ts
 * ```
 */
export type Drop<L extends unknown[], A> = L extends [infer Head, ...infer Rest]
  ? Equals<A, Head> extends true ? Rest : Drop<[...Rest, Head], A>
  : L;

// type Test = Drop<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3>[number];

// type TestExpect = [4, 5, 6, 8, 7, 9, 10, 1, 2][number];

// TypeChecking<Test, TestExpect, Test.Pass>;
