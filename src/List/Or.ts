declare const MISSANNIL: unique symbol;
export type OrSign = typeof MISSANNIL;

/**
 * @description  create a Or array type
 * @param L unknown[]
 * @link [test](./Or.test.ts)
 * @returns [...L, OrSign]
 * ```ts
 * import type { IfEquals ,Test} from "hry-types";
 *
 * TypeChecking<L.Or<[1, 2]>, [1, 2, OrSign], Test.Pass>;
 * TypeChecking<IfEquals<{}, L.Or<[unknown, {}]>>, unknown, Test.Pass>;
 * TypeChecking<IfEquals<unknown, L.Or<[unknown, {}]>>, unknown, Test.Pass>;
 * ```
 */
export type Or<L extends unknown[]> = [...L, OrSign];
