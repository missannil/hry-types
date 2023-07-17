import type { Equals } from "../Any/Equals";

/**
 * 类型相等验证,用于测试。这是一个函数,但无需调用它
 * @example
 * ```ts
 * EqualsChecking<1, 1, Test.Pass>;
 * EqualsChecking<1, 0, Test.Fail>;
 * ```
 */
export function Checking<
  A,
  B,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _Expect extends Equals<A, B>,
> // eslint-disable-next-line @typescript-eslint/no-empty-function
() {
}
