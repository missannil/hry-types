/**
 * 类型匹配策略。
 *
 * @remarks
 * 匹配策略中的箭头用于表示类型关系的方向：
 *
 * - `allExtends->->`：A1 可以赋值给 A2。
 * - `<-allExtends->`：A2 可以赋值给 A1。
 * - `someExtends->->`：A1 的成员中存在可以赋值给 A2 的类型。
 * - `<-someExtends->`：A2 的成员中存在可以赋值给 A1 的类型。
 * - `equal`：A1 与 A2 相等。
 *
 * 箭头不能简单通过交换 A1、A2 参数位置 来替代。
 * 对于 `Has`、`SelectKeys` 等高级泛型，其参数位置具有固定的业务语义，
 * 不能为了改变类型关系方向而交换参数。
 */
export type _Match = "allExtends->" | "<-allExtends" | "equal" | "someExtends->" | "<-someExtends";
