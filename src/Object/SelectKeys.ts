import type { Is, Match } from "..";

/**
 * @hidden
 */
export type _SelectKeys<O extends object, M, match extends Match> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? K : never;
}[keyof O];
/**
 * Get the keys of `O` which fields match `M`
 * @param O to extract from
 * @param M to select fields
 * @param match (?=`'default'`) to change precision
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type SelectKeys<O extends object, M, match extends Match = "default"> = O extends unknown
  ? _SelectKeys<O, M, match>
  : never;
