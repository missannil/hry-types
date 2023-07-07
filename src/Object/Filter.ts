import type { _Match } from "../_internal/_Match";
import type { FilterKeys } from "./FilterKeys";

/**
 * 过滤掉对象中类型与M匹配的key
 * @example
 * ```ts
 * import type { O,Test } from 'hry-types'
 *
 * type Test1 = O.Filter<{ a: number }, number>;
 * // Test1 => {};
 *
 * type Test2 = O.Filter<{ a: number; b: string }, number>;
 * // Test2 => { b: string };
 *
 * type Test3 = O.Filter<{ a: number; b: string; c: boolean }, number | string>;
 * // Test3 => { c: boolean }
 *
 * type Test4 = O.Filter<{ a: number; b: string; c: boolean }, number | string, "<-extends">;
 * // Test4 => { a: number; b: string; c: boolean }
 *
 * type Test5 = O.Filter<{ a: number | string; b: string; c: boolean }, number | string, "equals">;
 * // Test5 => { b: string; c: boolean }
 * ```
 * @return object
 */
export type Filter<
  O,
  M,
  match extends _Match = "extends->",
> = Pick<O, FilterKeys<O, M, match>>;
