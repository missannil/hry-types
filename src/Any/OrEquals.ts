import type { Equals } from "./Equals";

/**
 * @description  A(任意类型)与L(数组类型)其中一项相等即返回true,都不相等返回false
 * @example
 * ```ts
 * type result = OrEquals<1, [1, 2, 3]> // true
 * type result = OrEquals<1, [2, 3]> // false
 * ```
 */
export type OrEquals<A, L extends unknown[]> = L extends [infer Head, ...infer Rest]
  ? Equals<A, Head> extends true ? true : OrEquals<A, Rest>
  : false;
