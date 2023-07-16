import type { Equals } from "./Equals";

/**
 * 判断A1和A2是否相等,相等返回Then(默认unknown),不等返回Else(默认A1)。
 * @param A1 - 任意类型
 * @param A2 - 任意类型
 * @returns Then or Else
 */
export type IfEquals<A1, A2, Then = unknown, Else = A1> = Equals<A1, A2> extends true ? Then : Else;
