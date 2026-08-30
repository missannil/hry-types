import type { IsEqual } from "./IsEqual";

/**
 * 判断 `A1` 与 `A2` 是否相等。
 *
 * 相等时返回 `Then`，否则返回 `Else`。
 *
 * @remarks
 * 判断由 `IsEqual` 完成，其类型相等的判断规则与 `IsEqual` 保持一致。
 *
 * `Then` 默认为 `unknown`，`Else` 默认为 `A1`。
 *
 * @param A1 - 第一个待判断的类型。
 * @param A2 - 第二个待判断的类型。
 * @param Then - 相等时返回的类型，默认为 `unknown`。
 * @param Else - 不相等时返回的类型，默认为 `A1`。
 * @returns 相等时返回 `Then`，否则返回 `Else`。
 *
 * @example
 * ```ts
 * type Test1 = IfEquals<1, 1, "equal", "different">; // "equal"
 * type Test2 = IfEquals<1, 2, "equal", "different">; // "different"
 *
 * type Test3 = IfEquals<1 | 2, 1 | 2, true, false>; // true
 * type Test4 = IfEquals<1 | 2, 2 | 1, true, false>; // true
 * type Test5 = IfEquals<{ a: number } & { b: string }, { a: number; b: string }, true, false>; // false
 * ```
 */
export type IfEquals<
  A1,
  A2,
  Then = unknown,
  Else = A1,
> = IsEqual<A1, A2> extends true ? Then : Else;
