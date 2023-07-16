/**
 * 判断A1是否包含A2的子类型, 如果是返回Then(默认unknown),否则返回Else(默认A1)
 * @remarks 该类型会对联合类型(A1)做分发判断
 * @param A1 - 任意类型
 * @param A2 - 任意类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = IfContains<1, 1> // unknown
 * type Test2 = IfContains<1, 1, true> // true
 * type Test3 = IfContains<1, 2, true> // 1
 * type Test4 = IfContains<1, 2, true, false> // false
 * // 会对联合类型做分发判断
 * type Test5 = IfContains<1 | 2, 1, true, false> // true
 * ```
 */
export type IfContains<A1, A2, Then = unknown, Else = A1> = true extends (A1 extends A2 ? true : false) ? Then : Else;
