import type { Equals } from "./Equals";

/**
 * A1与L其中一项相等即返回true,都不相等返回false
 * @param A - 任意类型
 * @param T - 任意元组类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = OrEquals<1, [1, 2, 3]> // true
 * type Test2 = OrEquals<1, [2, 3, number]> // false
 * ```
 */
export type OrEquals<A, T extends unknown[]> = T extends [infer Head, ...infer Rest]
  ? Equals<A, Head> extends true ? true : OrEquals<A, Rest>
  : false;
