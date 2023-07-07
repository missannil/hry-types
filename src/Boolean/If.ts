/**
 * @description B is true, return Then, else return Else
 * @link [test](./If.test.ts)
 * @returns Then or Else
 */
export type If<B, Then, Else> = [B] extends [true] ? Then : Else;
