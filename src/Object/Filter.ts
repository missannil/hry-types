import type { _Match } from "../_internal/_Match";
import type { FilterKeys } from "./FilterKeys";

/**
 * 过滤掉对象中类型与M匹配的key
 * @example
 * ```ts
 * type Test1 = Filter<{ a: number }, number>;// => {}
 * type Test2 = Filter<{ a: number; b: string }, number>;// => { b: string }
 * type Test3 = Filter<{ a: number; b: string; c: boolean }, number | string>;// => { c: boolean }
 * type Test4 = Filter<{ a: number | string; b: string; c: boolean }, number | string, "<-extends">;// => { b: string; c: boolean }
 * type Test5 = Filter<{ a: number | string; b: string; c: boolean }, string, "equals">;// => { a: number | string; c: boolean }
 * type Test6 = Filter<{ a: number | string; b: string | number; c: boolean }, string, "contains->">;// => { c: boolean }
 * type Test7 = Filter<{ a: string; b: number; c: boolean }, string | number, "<-contains">;// => { c: boolean }
 * type Test8 = Filter<{ a?: string }, string>;// => {}
 *
 * ```
 * @returns object
 */
export type Filter<
  O,
  M,
  match extends _Match = "extends->",
> = Pick<O, FilterKeys<O, M, match>>;
