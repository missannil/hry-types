import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

/**
 * 元组中是否包含M类型
 * @param Tuple 元组
 * @param M 匹配类型
 * @param match 匹配方式(_Match)
 * @example
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 * type Tuple = [123, "123", boolean, "123"];
 * type Test1 = Tuple.IsContains<string, "extends->">;
 * // Test1 => true;
 * type Test2 = Tuple.IsContains<string, "<-extends">;
 * // Test2 => true;
 * type Test3 = Tuple.IsContains<string, "equals">;
 * // Test3 => false;
 * type Test4 = Tuple.IsContains<string | undefined, "equals">;
 * // Test4 => true;
 * ```
 * @return true or false
 */
export type IsContains<Tuple, M, Match extends _Match = "extends->"> = Tuple extends [infer Head, ...infer Rest]
  ? Is<Head, M, Match> extends true ? true : IsContains<Rest, M, Match>
  : false;
