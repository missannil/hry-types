import type { Match } from "../Misc/Match";
import type { Equals } from "./Equals";
import type { Extends } from "./Extends";

/**
 * @description 判断两个类型继承关系
 * @param A
 * @param A1
 * @param match (?=`'default'`) 比较精度
 * @link [test](./IsNever.test.ts)
 * @returns true or false
 */
export type Is<A, A1, match extends Match = "extends->"> = {
  // "contains->": Contains<A, A1>;
  "extends->": Extends<A, A1>;
  // "<-contains": Contains<A1, A>;
  "<-extends": Extends<A1, A>;
  "equals": Equals<A1, A>;
}[match];
