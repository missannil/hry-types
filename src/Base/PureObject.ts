/**
 * @description 纯对象类型
 * string[] extends PureObject ? true : false         =>false
 * {xxx:unknown} extends PureObject ? true : false    =>true
 * 对接口类型无效
 * ```ts
 *    interface User {
 *    name:string
 * }
 * type test = User extends PureObject ? 1 : 0
 * test => 0
 * ```
 * 不适用泛型约束 除非确保传入的泛型不为接口类型
 */
export type PureObject = Record<string, unknown>;