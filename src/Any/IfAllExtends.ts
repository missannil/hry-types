import type { IsAllExtends } from "./IsAllExtends";

/**
 * 判断 `A1`整体 是否可以赋值给 `A2`。
 *
 * 可以时返回 `Then`，否则返回 `Else`。
 *
 * @remarks
 * 判断由 `IsAllExtends` 完成。
 *
 * 当 `A1` 为联合类型时，会将整个联合类型作为一个整体进行判断，
 * 不会对联合类型的成员分别进行判断。
 *
 * `Then` 默认为 `unknown`，`Else` 默认为 `A1`。
 *
 * `any`、`never` 等特殊类型的处理规则与 `IsAllExtends` 保持一致。
 *
 * @param A1 - 待判断的类型。
 * @param A2 - 目标类型。
 * @param Then - 条件成立时返回的类型，默认为 `unknown`。
 * @param Else - 条件不成立时返回的类型，默认为 `A1`。
 * @returns 条件成立时返回 `Then`，否则返回 `Else`。
 *
 * @example
 * ```ts
 * type Test1 = IfAllExtends<1, number>; // unknown
 * type Test2 = IfAllExtends<1, number, true>; // true
 * type Test3 = IfAllExtends<1, string, true>; // 1
 * type Test4 = IfAllExtends<1, string, true, false>; // false
 *
 * // 联合类型作为整体进行判断
 * type Test5 = IfAllExtends<1 | 2, number, true, false>; // true
 * type Test6 = IfAllExtends<1 | string, number, true, false>; // false
 * ```
 */
export type IfAllExtends<A1, A2, Then = unknown, Else = A1> = IsAllExtends<A1, A2> extends true ? Then : Else;
