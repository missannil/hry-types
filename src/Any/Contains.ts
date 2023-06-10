import type { Extends } from "./Extends";
/**
 * @description 基于Extends,不同点是把boolean类型变为false
 * @param A1
 * @param A2
 * @returns true 或 false
 * @example
 * ```ts
 * type test0 = Contains<'a' | 'b', 'b'> // false
 * type test1 = Contains<'a', 'a' | 'b'> // true
 *
 * type test2 = Contains<{a: string}, {a: string, b: number}> // false
 * type test3 = Contains<{a: string, b: number}, {a: string}> // true
 *
 * ```
 */
export type Contains<A1, A2> = Extends<A1, A2> extends true ? true : false;
