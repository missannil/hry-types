import type { Test } from "..";
import type { Equals } from "../Any/Equals";
import type { MergeIntersection } from "../Object/MergeIntersection";

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
  Expect extends Equals<MergeIntersection<A>, MergeIntersection<B>> extends true ? Test.Pass : Test.Fail,
>(
  t?: A,
  r?: Expect,
): void {
  t;
  r;
}
// test
TypeChecking<1, 1, Test.Pass>();
TypeChecking<1, 0, Test.Fail>();
