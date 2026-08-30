import type { IsSomeExtends } from "./IsSomeExtends";
/**
 * 判断 `A1` 的成员中是否存在可以赋值给 `A2` 的类型。
 *
 * 存在时返回 `Then`，否则返回 `Else`。
 *
 * @remarks
 * 判断由 `IsSomeExtends` 完成。
 *
 * 当 `A1` 为联合类型时，会分别判断其每个成员是否可以赋值给 `A2`，
 * 只要存在满足条件的成员，即返回 `Then`；否则返回 `Else`。
 *
 * `Then` 默认为 `unknown`，`Else` 默认为 `A1`。
 *
 * `any`、`never` 等特殊类型的处理规则与 `IsSomeExtends` 保持一致。
 *
 * @param A1 - 待判断的类型。
 * @param A2 - 目标类型。
 * @param Then - 条件成立时返回的类型，默认为 `unknown`。
 * @param Else - 条件不成立时返回的类型，默认为 `A1`。
 * @returns 条件成立时返回 `Then`，否则返回 `Else`。
 *
 * @example
 * ```ts
 * type Test1 = IfSomeExtends<1, 1>; // unknown
 * type Test2 = IfSomeExtends<1, 1, true>; // true
 * type Test3 = IfSomeExtends<1, 2, true>; // 1
 * type Test4 = IfSomeExtends<1, 2, true, false>; // false
 * type Test5 = IfSomeExtends<1 | 2, 1, true, false>; // true
 * ```
 */
export type IfSomeExtends<A1, A2, Then = unknown, Else = A1> = IsSomeExtends<A1, A2> extends true ? Then : Else;
