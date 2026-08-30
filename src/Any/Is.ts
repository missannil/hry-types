import type { _Match } from "../_internal/_Match";
import type { EnsureNonUnion } from "../Constraint/EnsureNonUnion";
import type { As } from "./As";
import type { IsAllExtends } from "./IsAllExtends";
import type { IsEqual } from "./IsEqual";
import type { IsSomeExtends } from "./IsSomeExtends";
/**
/**
 * 根据指定的类型匹配策略，判断 A1 与 A2 的类型关系。
 *
 * @remarks
 * TypeScript 原生仅提供 `extends` 作为类型关系判断的基础机制，它有下面这些特性。
 * - 分发性 条件判断的裸泛型参数为联合类型时，会对联合类型的每个成员进行分发判断。
 * - 方向性：`extends` 的类型关系判断是单向的，即判断 A1 是否可以赋值给 A2。
 * - 结果非唯一性 由于条件类型可能发生分发，判断结果可能是 `真值 | 假值`， 而不是唯一的 `真值` 或 `假值`。
 * 上面的特性虽然可以通过 `[A1] extends [A2]` 来解决分发性问题,通过 `A2 extends A1` 来解决方向性问题，通过
 * `true extends (A1 extends A2 ? true : false)? true :false` 来解决结果不唯一性问题，但这样会在不同泛型类型中写大量重复的类型判断逻辑。
 *
 * Is 将这些常用的类型关系判断统一为可选择的匹配策略，
 * 在需要控制类型关系判断行为的泛型中提供统一入口。
 * 但这不意味着所有类型关系判断都必须使用 Is。
 * 在某些情况下，直接使用 `extends` 更为简洁：
 * - 确定 A1 不会是联合类型时，可以不考虑分发性；
 * - 可以方便地调换 A1、A2 的位置时，可以不考虑方向性；
 * - 真值或假值分支中有 `never`，即使存在分发，判断结果仍然是唯一的 `真值`(`真值 | never`) 或 `假值`(`假值 | never`)，可以不考虑结果非唯一性。
 *
 * 匹配策略中的箭头表示判断方向：
 * - `allExtends->` - 判断 A1 是否可以赋值给 A2。
 * - `<-allExtends` - 判断 A2 是否可以赋值给 A1。
 * - `someExtends->` - 判断 A1 的成员中是否存在可以赋值给 A2 的类型。
 * - `<-someExtends` - 判断 A2 的成员中是否存在可以赋值给 A1 的类型。
 * - `equal` - 判断 A1 与 A2 是否相等。
 *
 * 箭头方向的设计是因为某些复杂泛型在语义上就决定了A1和A2的位置不可以随意交换。
 * 例如:
 * ```ts
 * // 判断对象中是否存在与number类型匹配的属性
 * type Example = Has<{ a:1 | string,b:number},number>;
 * ```
 * 上述例子中，`Has` 泛型的参数位置具有固定的语义，A1 对应对象类型，A2 对应要检查的类型，因此不能随意交换。
 * 此时方向设计就显得尤为重要。
 *
 * EnsureNonUnion 用于约束匹配策略 M 必须为单一策略,实际上是因为当前 Is 设计为只接受单一匹配策略,不想为了处理联合匹配策略而进行过渡设计。
 *
 *
 * @param A1 - 第一个类型。
 * @param A2 - 第二个类型。
 * @param M - 类型匹配策略，默认为 `allExtends->`。
 * @returns true 或 false。
 */
export type Is<
  A1,
  A2,
  M extends EnsureNonUnion<M, _Match> = "allExtends->",
> = {
  "allExtends->": IsAllExtends<A1, A2>;
  "<-allExtends": IsAllExtends<A2, A1>;
  "someExtends->": IsSomeExtends<A1, A2>;
  "<-someExtends": IsSomeExtends<A2, A1>;
  "equal": IsEqual<A1, A2>;
}[As<M, _Match>];
