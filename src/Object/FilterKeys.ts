import { ExpectType } from "..";
import type { Is } from "../Any/Is";
import type { Match } from "../Any/Match";

/**
 * @hidden
 */
export type _FilterKeys<O extends object, M, match extends Match> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? never : K;
}[keyof O];
/**
 * Filter out the keys of `O` which fields match `M`
 * @param O to remove from
 * @param M to select fields
 * @param match (?=`'default'`) to change precision
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type FilterKeys<O extends object, M, match extends Match = "default"> = O extends unknown
  ? _FilterKeys<O, M, match>
  : never;
// test
ExpectType<FilterKeys<{ a: number; b: string }, number>, "b", true>();
