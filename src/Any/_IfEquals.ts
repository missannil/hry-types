import type { Equals } from "./Equals";

/**
 * @description  if A equals B return Then(default=unknown), else return Else(default=A)
 * @param A unknown
 * @param B unknown
 * @link [test](./_IfEquals.test.ts)
 * @returns Then or Else
 */
export type _IfEquals<A, B, Then = unknown, Else = A> = Equals<A, B> extends true ? Then : Else;
