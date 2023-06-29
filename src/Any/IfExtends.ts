/**
 * @description if A extends B then return Then(default unknown), else return Else(default A)
 * @link [test](./IfExtends.test.ts)
 * @returns true or false
 */
export type IfExtends<A, B, Then = unknown, Else = A> = [A] extends [B] ? Then : Else;
