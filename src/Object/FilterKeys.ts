import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

type _FilterKeys<
  O,
  M,
  match extends _Match = "extends->",
> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? never : K;
}[keyof O];

/**
 * @description 类型匹配的key去掉,返回剩余的key
 * @param O object
 * @example
 * ```ts
 * import type{ O} from 'hry-types'
 * type Test = FilterKeys<{ a: number }, number>;
 * // Test => never
 *
 * type Test1 = FilterKeys<{ a: number; b: string }, number>;
 * // test1 => "b"
 *
 * type Test3 = FilterKeys<{ a: number; b: string; c: boolean }, number | string>;
 * // Test3 => "c"
 *
 * type Test4 = FilterKeys<{ a: number; b: string; c: boolean }, number | string, "<-extends">;
 * // Test4 => "a" | "b" | "c"
 *
 * type Test5 = FilterKeys<{ a: number | string; b: string; c: boolean }, number | string, "equals">;
 * // Test5 => "b" | "c"
 *
 * ```
 * @return string or never
 */
export type FilterKeys<
  O,
  M,
  match extends _Match = "extends->",
> = O extends unknown ? _FilterKeys<O, M, match>
  : never;
