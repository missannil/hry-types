import type { AnyFunction } from "../Misc/AnyFunction";

/**
 * 深度去除readonly
 * @example
 * ```ts
 * import { type O, type NonReadonly , TypeChecking} from 'hry-types'
 * TypeChecking<
 * O.NonReadonly<{ readonly a: number; readonly b: { readonly c: number } }>,
 * { a: number; b: { c: number } },
 * Test.Pass
 * >;
 *
 * ```
 * @returns object
 */
export type NonReadonly<T extends object> = T extends AnyFunction ? T : {
  -readonly [k in keyof T]: T[k] extends object ? NonReadonly<T[k]> : T[k];
};
