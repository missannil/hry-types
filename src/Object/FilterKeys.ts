import type { Is } from "../Any/Is";
import type { Match } from "../Misc/Match";

/**
 * @hidden
 */
export type _FilterKeys<
  O extends object,
  M,
  match extends Match = "extends->",
> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? never : K;
}[keyof O];
/**
 * 对象类型匹配的key去掉,返回剩余的key
 * @example
 * ```ts
 * import type{ O,Test} from 'hry-types'
 *
 * type obj = { t: true; f: false; b: boolean };
 * TypeChecking<O.FilterKeys<obj, true, "extends->">, "b" | "f", Test.Pass>;
 * TypeChecking<O.FilterKeys<obj, false, "equals">, "t" | "b", Test.Pass>;
 * TypeChecking<O.FilterKeys<obj, boolean, "equals">, "t" | "f", Test.Pass>;
 *
 * ```
 * @return string
 */
export type FilterKeys<
  O extends object,
  M,
  match extends Match = "extends->",
> = O extends unknown ? _FilterKeys<O, M, match>
  : never;
