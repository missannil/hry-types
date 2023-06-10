import type { IsEqual } from "./IsEqual";

/**
 * @description 不支持对象交叉的相等判断
 * ```
 *  type test = IsEqual<{a:number}&{b:number},{a:number,b:number}>
 *  => false
 * ```
 */
export type IfEqual<T, TCompare, Then = unknown, Else = T> = IsEqual<T, TCompare> extends true ? Then
  : Else;
