import type { EnsureUnion } from "../Constraint/EnsureUnion";
import type { IntersectOf } from "./IntersectOf";

/**
 * 获取联合类型中的一个成员。
 *
 * @remarks
 * 将联合类型转换为函数联合，再利用函数参数位置的逆变特性将其转换为交叉类型，
 * 最后通过参数类型推导得到联合类型中的一个成员。
 *
 * ⚠️ 联合类型没有稳定的成员顺序，因此 `ExtractUnionMember` 返回的成员不一定是
 * 联合类型声明顺序中的最后一个成员。
 *
 * @param U - 联合类型
 * @returns 联合类型中的一个成员
 *
 * @example
 *
 * ```ts
 * type Test1 = ExtractUnionMember<1 | 2 | 3>;
 * // => 3
 *
 * type Test2 = ExtractUnionMember<"a" | "b" | "c">;
 * // => "c"
 * ```
 */
export type ExtractUnionMember<U extends EnsureUnion<U>> = _ExtractUnionMember<U>;
export type _ExtractUnionMember<U> = IntersectOf<_ToUnionFunc<U>> extends (x: infer P) => void ? P
  : never;

/**
 * 将联合类型转换为函数联合类型。
 */
type _ToUnionFunc<U> = U extends unknown ? (x: U) => void
  : never;

// /**
//  * 将联合类型转换为交叉类型。
//  *
//  * 利用函数参数位置的逆变特性，
//  * 通过推导函数参数类型得到联合成员的交叉类型。
//  * @example
//  * ```ts
//  * type Test1 = IntersectOf<string | number>;
//  * // => string & number
//  *
//  * type Test2 = IntersectOf<{ a: 1 } | { b: 2 }>;
//  * // => { a: 1 } & { b: 2 };
//  * ```
//  */
// type _IntersectOf<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
