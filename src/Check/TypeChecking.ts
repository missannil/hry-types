import type { Test } from "..";
import type { Equals } from "../Any/Equals";
import type { ComputeIntersection } from "../Object/ComputeIntersection";
import type { ComputeUnion } from "../Object/ComputeUnion";

/**
 * @description 判断两个类型是否相等
 * @example
 * ```ts
 * ExpectType<1, 1, true>();
 * ExpectType<1, 0, false>();
 * ```
 */
export function TypeChecking<
  A,
  B,
  Expect extends Equals<ComputeUnion<ComputeIntersection<A>>, ComputeUnion<ComputeIntersection<B>>> extends true
    ? Test.Pass
    : Test.Fail,
>(
  a?: A,
  e?: Expect,
): void {
  a;

  e;
}