import type { IsAnyOrNever } from "./IsAnyOrNever";

/**
 * 判断 `A1` 是否可以赋值给 `A2`。
 *
 * @remarks
 * `A1` 为联合类型时，不会进行条件类型分发，
 * 而是将整个 `A1` 作为一个整体与 `A2` 进行判断。
 *
 * `any` 和 `never` 不参与正常的类型匹配：
 * 当 `A1` 或 `A2` 为 `any`、`never` 时，返回 `false`。
 *
 * 这样可以避免 `any` 和 `never` 的特殊类型关系导致类型意外通过。
 * 如果实际场景需要允许 `any` 或 `never` 参与判断，应在外部显式处理。
 *
 * @param A1 - 待判断的类型。
 * @param A2 - 目标类型。
 * @returns `A1` 可以赋值给 `A2` 时返回 `true`，否则返回 `false`。
 *
 * @example
 * ```ts
 * type Test1 = IsAllExtends<1 | 2, number>; // true
 * type Test2 = IsAllExtends<number | string, string | number>; // true
 * type Test3 = IsAllExtends<number | string, string>; // false
 *
 * // `never` 和 `any` 不参与正常匹配
 * type Test4 = IsAllExtends<never, string>; // false
 * type Test5 = IsAllExtends<any, string>; // false
 * type Test6 = IsAllExtends<string, any>; // false
 * type Test7 = IsAllExtends<string, never>; // false
 * ```
 */
export type IsAllExtends<A1, A2> = IsAnyOrNever<A1> extends true ? false
  : IsAnyOrNever<A2> extends true ? false
  : [A1] extends [A2] ? true
  : false;
