import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

/**
 * 元组中是否包含M类型
 * @param Tuple 元组
 * @param M 匹配类型
 * @param match 匹配方式(_Match)
 * @example
 * ```ts
 * import { type T } from 'hry-types'
 * type Tuple = [1,'1'];
 * type Test1 = T.IsContains<Tuple,1, "extends->">;
 * // Test1 => true;
 * type Test2 = T.IsContains<Tuple,number, "<-extends">;
 * // Test2 => true;
 * type Test3 = T.IsContains<Tuple,'1', "equals">;
 * // Test3 => true;
 * type Test4 = T.IsContains<Tuple,1 | '1', "equals">;
 * // Test4 => false;
 * ```
 * @return true or false
 */
export type IsContains<Tuple, M, Match extends _Match = "extends->"> = Tuple extends [infer Head, ...infer Rest]
  ? Is<Head, M, Match> extends true ? true : IsContains<Rest, M, Match>
  : false;
