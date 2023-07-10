/**
 * @description 判断A与B类型是否相等(结构比较)
 * @example
 * ```ts
 * type result = Equals<1, 1> // true
 * type result = Equals<1, 2> // false
 * ```
 * @summary
 * 1. 无法判断交叉类型是否相等
 * type result = Equals<{ a: number } & { b:string },{ a:number; b:string }> // false
 * @return true or false
 */
export type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true
  : false;
