import type { Match } from "../Misc/Match";
import type { FilterKeys } from "./FilterKeys";

/**
 * 过滤掉对象O中,类型与M匹配的key
 * @example
 * ```ts
 * import type { O,Test } from 'hry-types'
 * type obj = { t: true; f: false; b: boolean };
 *
 * // 过滤obj中类型为true子类型的key,t会被去掉
 * TypeChecking<O.Filter<obj, true, "extends->">, { f: false; b: boolean }, Test.Pass>;
 *
 * // 过滤obj中类型为boolean子类型的key,都会被去掉
 * TypeChecking<O.Filter<obj, boolean, "extends->">, {}, Test.Pass>;
 *
 * // 过滤obj中类型为true父类型的key ,t和b 会被去掉
 * TypeChecking<O.Filter<obj, true, "<-extends">, { f: false }, Test.Pass>;
 *
 * // 过滤obj中类型为boolean父类型的key,b会被去掉
 * TypeChecking<O.Filter<obj, boolean, "<-extends">, { t: true; f: false }, Test.Pass>;
 *
 * // 过滤obj中类型与boolean相等的key , b会被去掉
 * TypeChecking<O.Filter<obj, boolean, "equals">, { t: true; f: false }, Test.Pass>;
 * ```
 * @return object
 */
export type Filter<
  O extends object,
  M,
  match extends Match = "extends->",
> = Pick<O, FilterKeys<O, M, match>>;
