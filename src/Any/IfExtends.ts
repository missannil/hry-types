/**
 * @description  判断A1是否为A2的子类型 如果是返回Then(默认unknown),否则返回Else(默认A1)
 * @link [test](./IfExtends.test.ts)
 * @returns true or false
 */
export type IfExtends<A1, A2, Then = unknown, Else = A1> = [A1] extends [A2] ? Then : Else;
