/**
 * @description 判断2个类型是否相等(结构比较)
 * @return true or false
 */
export type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true
  : false;
