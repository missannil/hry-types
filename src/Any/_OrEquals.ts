import type { Equals } from "./Equals";

/**
 * @description  if A equals one of L, then return Then, else return Else
 * @param A unknown
 * @param L unknown[]
 * @param Then unknown
 * @param Else unknown
 * @link [test](./_OrEquals.test.ts)
 * @returns Then or Else
 */
export type _OrEquals<A, L, Then, Else> = L extends [infer HEAD, ...infer Tail]
  ? Equals<A, HEAD> extends true ? Then : _OrEquals<A, Tail, Then, Else>
  : Else;
