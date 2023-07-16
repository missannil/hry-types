/**
 * 判断A与B类型是否相等(结构比较)
 * @param A - Any类型
 * @param B - Any类型
 * @returns true or false
 * @remarks
 * 无法判断交叉对象类型是否相等
 * @example
 * ```ts
 * type Test1 = Equals<1, 1> // true
 * type Test2 = Equals<1, 2> // false
 * type Test3 = Equals<{ a: number } & { b: string }, { a: number; b: string }>; // false
 * type Test4 = Equals<1 | 2, 2 | 1>; // true
 * ```
 * @returns true or false
 */
export type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true
  : false;
