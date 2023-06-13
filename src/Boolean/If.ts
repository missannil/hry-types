import type { IfEquals } from "../Any/IfEquals";

/**
 * 如果B为true返回Then,否则返回Else
 */
export type If<B extends IfEquals<B, boolean, "输入类型应为true或false,当前为boolean", boolean>, Then, Else = never> =
  B extends true ? Then : Else;
