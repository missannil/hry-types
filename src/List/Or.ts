declare const MISSANNIL: unique symbol;
export type OrSign = typeof MISSANNIL;
/**
 * Or数组
 * 方便IfEquals时可对或类型进行比较
 * ```ts
 * import type { IfEquals ,Test} from "hry-types";
 *
 * TypeChecking<L.Or<[1, 2]>, [1, 2, OrSign], Test.Pass>;
 * TypeChecking<IfEquals<{}, L.Or<[unknown, {}]>>, unknown, Test.Pass>;
 * TypeChecking<IfEquals<unknown, L.Or<[unknown, {}]>>, unknown, Test.Pass>;
 * ```
 */
export type Or<L extends unknown[]> = [...L, OrSign];
