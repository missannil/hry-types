import type { Contains } from "./Contains";
import type { Equals } from "./Equals";
import type { Extends } from "./Extends";
import type { Match } from "./Match";

/**
 * @description 判断两个类型的关系
 * @param A
 * @param A1
 * @param match (?=`'default'`) to change precision
 * @returns [[Boolean]]
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = Is<'a', 'a' | 'b', 'extends->'> // True
 * type test1 = Is<'a' | 'b', 'a', 'extends->'> // Boolean
 *
 * type test2 = Is<'a', 'a' | 'b', '<-extends'> // Boolean
 * type test3 = Is<'a' | 'b', 'a', '<-extends'> // True
 *
 * type test4 = Is<'a', 'a' | 'b', 'contains->'> // True
 * type test5 = Is<'a' | 'b', 'a', 'contains->'> // False
 *
 * type test6 = Is<'a', 'a' | 'b', '<-contains'> // False
 * type test7 = Is<'a' | 'b', 'a', '<-contains'> // True
 *
 * type test8 = Is<'a', 'a' | 'b', 'equals'>      // False
 * type test9 = Is<'b' |'a', 'a' | 'b', 'equals'> // True
 * ```
 */
export type Is<A, A1, match extends Match = "default"> = {
  "default": Extends<A, A1>;
  "contains->": Contains<A, A1>;
  "extends->": Extends<A, A1>;
  "<-contains": Contains<A1, A>;
  "<-extends": Extends<A1, A>;
  "equals": Equals<A1, A>;
}[match];
