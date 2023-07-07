import type { _Match } from "../_internal/_Match";
import type { SelectKeys } from "./SelectKeys";

/**
 * @description 从`O`中选取与`M`匹配的属性
 * @example
 * ```ts
 * import { TypeChecking, type O, type Test} from 'hry-types'
 *
 * type Obj = { num: 123; str?: string; union: boolean };
 * type Test1 = O.Select<Obj, number, "extends->">;
 * // Test1 => { num: 123 };
 *
 * type Test2 = O.Select<Obj, string, "extends->">;
 * // Test2 => {}; 因为 string | undefined 不符合 extends-> 的要求
 *
 * type Test3 = O.Select<Obj, string, "<-extends">;
 * // Test3 => { str?: string };
 *
 * type Test4 = O.Select<Obj, string, "equals">;
 * // Test4 => {};
 *
 * type Test5 = O.Select<Obj, string | undefined, "equals">;
 * // Test5 => {str?: string};
 *
 * ```
 * @return object
 */
export type Select<O extends object, M, match extends _Match = "extends->"> = Pick<O, SelectKeys<O, M, match>>;
