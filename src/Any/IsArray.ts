import type { IsAllExtends } from "./IsAllExtends";
import type { IsAnyOrNever } from "./IsAnyOrNever";

/**
 * 判断 T 是否为数组类型。
 *
 * @remarks
 * 当 T 为联合类型时，只有 T 的所有成员均为数组类型时才返回 `true`；
 * 只要存在一个不是数组类型的成员，就返回 `false`。
 *
 * `any` 和 `never` 不被视为数组类型，因此始终返回 `false`。
 *
 * @example
 *
 * ```ts
 * type Test1 = IsArray<string[]>; // true
 * type Test2 = IsArray<number[]>; // true
 * type Test3 = IsArray<string[] | number[]>; // true
 * type Test4 = IsArray<string[] | number>; // false
 * type Test5 = IsArray<string | number>; // false
 * type Test6 = IsArray<string>; // false
 * type Test7 = IsArray<any>; // false
 * type Test8 = IsArray<never>; // false
 * type Test9 = IsArray<readonly string[]>; // true
 * type Test10 = IsArray<readonly string[] | readonly number[]>; // true
 * type Test11 = IsArray<readonly string[] | string>; // false
 *
 * ```
 *
 * @param T - 任意类型。
 * @returns true 或 false。
 */
export type IsArray<T> = true extends IsAnyOrNever<T> ? false
  : IsAllExtends<T, readonly unknown[]>;
