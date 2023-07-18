import type { _Match } from "../_internal/_Match";
import type { Contains } from "./Contains";
import type { Equals } from "./Equals";
import type { Extends } from "./Extends";
/**
 * 判断两个类型关系(继承,包含,相等)
 * @remarks ts中,泛型使用条件类型(extends关键字)时,结果可能4种情况,分别为:问号后类型,冒号后类型,问号和冒号后的联合类型,never类型(泛型为never时)。这在使用时会造成一定的麻烦,Is类型通过第三个泛型参数(匹配规则),使得结果只有两种情况,true或false
 匹配规则:
  1. extends-\>: 默认值,A1是否为A2的子类型,不会考虑联合类型的分发判断。
  2. contains-\>: A1是否含有A2的子类型,针对联合类型的判断。
  3. equals: A1是否等于A2,使用Equals类型判断。
  4. \<-extends: A2是否为A1的子类型,不会考虑联合类型的分发判断。即extends-\>的反向判断。
  5. \<-contains: A2是否含有A1的子类型,针对联合类型的判断。即contains-\>的反向判断。
 *
 * @param A1 - 任意类型
 * @param A2 - 任意类型
 * @param M - 判断规则(可选,默认为"extends-\>")
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = Is<1, number>;// true
 * type Test2 = Is<1, number,'<-extends'>;// false
 * type Test3 = Is< {} | [], unknown[],'contains->'>;// true
 * ```
 */
export type Is<A1, A2, M extends _Match = "extends->"> = {
  "contains->": Contains<A1, A2>;
  "extends->": Extends<A1, A2>;
  "<-contains": Contains<A2, A1>;
  "<-extends": Extends<A2, A1>;
  "equals": Equals<A1, A2>;
}[M];
