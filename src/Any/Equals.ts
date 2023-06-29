/**
 * @description assert A is equals B 不支持对象联合与交叉类型,应提前计算好结果
 * @link  [test](./Equals.test.ts)
 * @return true or false
 */
export type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true
  : false;
