import type { IfEquals } from "..";

/**
 * @description 判断二个类型是否相等
 * @example
 * ```ts
 * ExpectType<1, 1, true>();
 * ExpectType<1, 0, false>();
 * ```
 */
export function ExpectType<A, B, Expect extends IfEquals<A, B, true, false>>(
  t?: A,
  r?: Expect,
): void {
  t;
  r;
}
// test
ExpectType<1, 1, true>();
ExpectType<1, 0, false>();
