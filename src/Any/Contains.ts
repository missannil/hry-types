import type { Extends } from "./Extends";
/**
 * 解决extends对于联合类型可能得出boolean类型的问题
 * @example
 * ```ts
 * import { type A, type Test, TypeChecking } from "hry-types";
 *
 * TypeChecking<A.Extends<"A" | "B", "A">, true, Test.Fail>;
 * TypeChecking<A.Extends<"A" | "B", "A">, false, Test.Fail>;
 * TypeChecking<A.Extends<"A" | "B", "A">, boolean, Test.Pass>;
 * // ------分割线---------------
 * TypeChecking<A.Contains<"A" | "B", "A">, boolean, Test.Fail>;
 * TypeChecking<A.Contains<"A" | "B", "A">, true, Test.Fail>;
 * TypeChecking<A.Contains<"A" | "B", "A">, false, Test.Pass>;
 * ```
 */
export type Contains<A1, A2> = Extends<A1, A2> extends true ? true : false;
