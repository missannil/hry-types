/**
 * @description 相等判断,缺点是无法判断对象交叉(&)类型,可与判断前先计算交叉对象类型。
 * @example
 * ```ts
 * import { type A, type O, type Test, TypeChecking } from "hry-types";*
 *
 * TypeChecking<A.Equals<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>, true, Test.Fail>;
 * TypeChecking<A.Equals<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>, true, Test.Fail>;
 * // ⚠️对象交叉类型不符合预期,可通过MergeIntersection解决如下⚠️
 * TypeChecking<A.Equals<O.MergeIntersection<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }>, true, Test.Pass>;
 * ```
 */
export type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true
  : false;
