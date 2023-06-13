/**
 * A是否为B的子类型,then(默认unknown),Else(默认A)
 * @example
 * ```ts
 * import { type Test, TypeChecking } from "hry-types";
 *
 * TypeChecking<IfExtends<"a", "a" | "b">, unknown, Test.Pass>;
 * TypeChecking<IfExtends<"a", "b">, "a", Test.Pass>;
 * TypeChecking<IfExtends<"a", "a" | "b", 1, 0>, 1, Test.Pass>;
 *
 * ```
 */
export type IfExtends<A, B, Then = unknown, Else = A> = [A] extends [B] ? Then : Else;
