import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";
/**
 * 类型匹配的key去掉,返回剩余的key
 * @param O - object
 * @example
 * ```ts
 * type Test1 = FilterKeys<{ a: number }, number>;// => never
 * type Test2 = FilterKeys<{ a: number; b: string }, number>;// => "b"
 * type Test3 = FilterKeys<{ a: number; b: string; c: boolean }, number | string>;// => "c"
 * type Test4 = FilterKeys<{ a: number; b: string; c: boolean }, number | string, "<-extends">;// => "a" | "b" | "c"
 * type Test5 = FilterKeys<{ a: number | string; b: string; c: boolean }, number | string, "<-contains">;// => "c"
 * type Test6 = FilterKeys<{ a: number | string; b: string | number; c: boolean }, string, "contains->">;// => "c"
 * type Test7 = FilterKeys<{ a: number | string; b: string; c: boolean }, number | string, "equals">;// => "b" | "c"
 * type Test8 = FilterKeys<{ a?: string }, string>;// => {}
 *
 * ```
 * @returns string or never
 */
export type FilterKeys<
  O,
  M,
  match extends _Match = "extends->",
> = {
  [K in keyof O]-?: Is<O[K] & {}, M, match> extends true ? never : K;
}[keyof O];
