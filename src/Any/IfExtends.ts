/**
 * 判断A1是否为A2的子类型, 如果是返回Then(默认unknown),否则返回Else(默认A1)
 * @remarks 该类型不会对联合类型(A1)做分发判断
 * @param A1 - 任意类型
 * @param A2 - 任意类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = IfExtends<1, 1> // unknown
 * type Test2 = IfExtends<1, 1, "Then" > // "Then"
 * type Test3 = IfExtends<1, 2, "Then"> // 1
 * type Test4 = IfExtends<1, 2, "Then", "Else"> // "Else"
 * // 不会对联合类型做分发判断
 * type Test5 = IfExtends<1 | 2, 1, "Then", "Else"> // "Else"
 * ```
 */
export type IfExtends<A1, A2, Then = unknown, Else = A1> = [A1] extends [A2] ? Then : Else;
