import type { IsAny } from "./IsAny";
import type { IsAnyOrNever } from "./IsAnyOrNever";

/**
 * 判断 `A1` 的成员中是否存在可以赋值给 `A2` 的类型。
 *
 * @remarks
 * TypeScript 的条件类型会对联合类型进行分发，
 * 因此 `A1` 为联合类型时，会分别判断每个成员与 `A2` 的赋值关系。
 *
 * `IsSomeExtends` 会进一步判断分发结果中是否存在 `true`，
 * 因此始终返回唯一的 `true` 或 `false`。
 *
 * `any` 和 `never` 不参与匹配判断：
 * 当 `A1` 或 `A2` 为 `any`、`never` 时，返回 `false`。
 *
 * 这是为了避免 `any` 和 `never` 的特殊类型关系导致非预期的匹配结果。
 * 如果实际场景需要允许 `any` 或 `never` 参与匹配，应在外部显式处理。
 *
 * @param A1 - 待匹配的类型。
 * @param A2 - 目标类型。
 * @returns A1 的成员中存在可以赋值给 A2 的类型时返回 `true`，否则返回 `false`。
 *
 * @example
 * ```ts
 * type Test1 = IsSomeExtends<boolean, true>; // false
 * type Test2 = IsSomeExtends<1 | "a", 1>; // true
 * type Test3 = IsSomeExtends<1 | "a", "a">; // true
 * type Test4 = IsSomeExtends<1 | "a", number>; // true
 * type Test5 = IsSomeExtends<1 | "a", string>; // true
 * type Test6 = IsSomeExtends<1 | "a", boolean>; // false
 * type Test7 = IsSomeExtends<1 | "a", boolean | string>; // true
 * type Test8 = IsSomeExtends<1 | "a", boolean | number>; // true
 * type Test9 = IsSomeExtends<1 | "a", any>; // false
 * type Test10 = IsSomeExtends<any, "1">; // false
 * type Test11 = IsSomeExtends<never, "1">; // false
 * type Test12 = IsSomeExtends<1, never>; // false
 * ```
 */
export type IsSomeExtends<A1, A2> = IsAnyOrNever<A1> extends true ? false
  : IsAny<A2> extends true ? false
  : true extends (A1 extends A2 ? true : false) ? true
  : false;
