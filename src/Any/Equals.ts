/**
 * @description 相等判断,缺点无法判断对象相交(&)类型
 * @example
 * ```ts
 * type test = Equals<{a:string}&{b:number},{a:string,b:number}>
 * // test => false
 * ```
 */
export type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true
  : false;
