import type { OrEquals } from "./OrEquals";

/**
 *  IF 或相等判断,A与T(元组)其中一项相等即返回Then(默认unknown),都不相等返回Else(默认A)
 * @param A - 任意类型
 * @param T - 任意元组类型
 * @returns Then or Else
 * @example
 * ```ts
 * type Test1 = IfOrEquals<1, [1, 2, 3]> // unknown
 * type Test2 = IfOrEquals<1, [1, 2, 3], "Then"> // "Then"
 * type Test3 = IfOrEquals<1, [2, 3, number]> // 1
 * type Test4 = IfOrEquals<1, [2, 3, number], "Then", "Else"> // "Else"
 * ```
 */
export type IfOrEquals<A, T extends unknown[], Then = unknown, Else = A> = OrEquals<A, T> extends true ? Then
  : Else;
