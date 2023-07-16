import type { Equals } from "./Equals";

type _IsUnion<A, O = A> = O extends A ? Equals<[A], [O]> extends true ? false : true
  : never;

/**
 * 判断A是否为联合类型
 * @param A - 任意类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = IsUnion<1 | 2> // true
 * type Test2 = IsUnion<boolean> // true
 * type Test3 = IsUnion<1> // false
 * ```
 */
export type IsUnion<A> = _IsUnion<A>;
