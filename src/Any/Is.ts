import type { Match } from "../Misc/Match";
import type { Equals } from "./Equals";
import type { Extends } from "./Extends";

/**
 * @description 判断两个类型继承关系
 * @param A
 * @param A1
 * @param match (?=`'default'`) 比较精度
 * @returns [[Boolean]]
 * @example
 * ```ts
 * import {A} from 'hry-types'
 *
 * type test0 = A.Is<'a', 'a' | 'b', 'extends->'> // True
 * type test1 = A.Is<'a' | 'b', 'a', 'extends->'> // Boolean
 *
 * type test2 = A.Is<'a', 'a' | 'b', '<-extends'> // Boolean
 * type test3 = A.Is<'a' | 'b', 'a', '<-extends'> // True
 *
 * type test4 = A.Is<'a', 'a' | 'b', 'contains->'> // True
 * type test5 = A.Is<'a' | 'b', 'a', 'contains->'> // False
 *
 * type test6 = A.Is<'a', 'a' | 'b', '<-contains'> // False
 * type test7 = A.Is<'a' | 'b', 'a', '<-contains'> // True
 *
 * type test8 = A.Is<'a', 'a' | 'b', 'equals'>      // False
 * type test9 = A.Is<'b' |'a', 'a' | 'b', 'equals'> // True
 * ```
 */
export type Is<A, A1, match extends Match = "extends->"> = {
  // "contains->": Contains<A, A1>;
  "extends->": Extends<A, A1>;
  // "<-contains": Contains<A1, A>;
  "<-extends": Extends<A1, A>;
  "equals": Equals<A1, A>;
}[match];
