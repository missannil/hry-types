import type { Equals } from "../Any/Equals";

/**
 * 类型相等验证,用于测试。这是一个函数,但无需调用它
 * @example
 * ```ts
 * Checking<1, 1, Test.Pass>;
 * Checking<1, 0, Test.Fail>;
 * ```
 */
export function Checking<
  A,
  B,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _Result extends Equals<A, B>,
> // eslint-disable-next-line @typescript-eslint/no-empty-function
() {
}
