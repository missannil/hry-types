import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

/**
 * @hidden
 */
export type _SelectKeys<O, M, match extends _Match> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? K : never;
}[keyof O];

/**
 * 获取对象O中匹配M类型的key
 * @param O 对象
 * @param M 匹配类型
 * @param match 匹配方式(_Match)
 * @example
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 *
 * type Obj = { num: 123; str?: string; union: boolean };
 * type Test1 = O.SelectKeys<Obj, number, "extends->">;
 * // Test1 => "num";
 *
 * type Test2 = O.SelectKeys<Obj, string, "extends->">;
 * // Test2 => never 因为 string | undefined 不符合 extends-> 的要求
 *
 * type Test3 = O.SelectKeys<Obj, string, "<-extends">;
 * // Test3 => "str";
 *
 * type Test4 = O.SelectKeys<Obj, string, "equals">;
 * // Test4 => never;
 *
 * type Test5 = O.SelectKeys<Obj, string | undefined, "equals">;
 * // Test5 => "str";
 *
 * ```
 * @return object
 */
export type SelectKeys<O, M, match extends _Match = "extends->"> = O extends unknown ? _SelectKeys<O, M, match>
  : never;
