import type { Equals } from "../Any/Equals";

/**
 * @description  泛型相等验证, 用于测试;这是一个函数, 但无需调用它
 * @example
 * ```ts
 * import type { ExpectType, Test } from "hry-types";
 * ExpectType<1, 1,Test.Pass>;
 * ExpectType<1, 0, Test.Fail>;
 * ```
 */
export function TypeChecking<
  A,
  B,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _Expect extends Equals<A, B>,
> // eslint-disable-next-line @typescript-eslint/no-empty-function
() {
}
