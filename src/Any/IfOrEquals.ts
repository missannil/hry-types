import type { OrEquals } from "./OrEquals";

/**
 * @description  IF相等判断,A1与L(数组)其中一项相等即返回Then(默认unknown),都不相等返回Else(默认A1)
 * @returns Then or Else
 */
export type IfOrEquals<A1, L extends unknown[], Then = unknown, Else = A1> = OrEquals<A1, L> extends true ? Then
  : Else;
