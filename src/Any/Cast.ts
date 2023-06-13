/**
 * 把A1类型缩窄为A2,若A1为A2子类型返回A1,否则返回A2.
 * @param A1 输入类型
 * @param A2 缩窄类型
 * @returns `A1 | A2`
 * @example
 * ```ts
 * import { type A, type Test, TypeChecking } from "hry-types";
 *
 * TypeChecking<A.Cast<"42", string>, "42", Test.Pass>;
 * TypeChecking<A.Cast<0, 42>, 42, Test.Pass>;
 * ```
 */
export type Cast<A1, A2> = A1 extends A2 ? A1 : A2;
