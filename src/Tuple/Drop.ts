import type { IsEqual } from "../Any/IsEqual";

/**
 * 从' T '中删除' A '项
 * @param T - 元组类型
 * @param A - 任意类型
 * example
 * ```ts
 * type Test1 = Drop<[1, 2, 3], 2>; // [1, 3]
 * type Test2 = Drop<readonly [1, 2, 3], 4>; // [1, 2, 3]
 * type Test3 = Drop<[], 1>; // []
 * ```
 * @returns [[unknown[]]]
 * @example
 */
export type Drop<T extends readonly unknown[], A> = T extends readonly [infer Head, ...infer Rest]
  ? IsEqual<A, Head> extends true ? Rest
  : [Head, ...Drop<Rest, A>]
  : T;
