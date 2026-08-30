import type { EnsureNonUnionPlainObject } from "../index";
import type { _SimplifyIntersection } from "./_index";

/**
 * Make some keys of an object never.
 * 指定对象的某些键为never
 * @example
 * ```ts
 * type obj = { a?: number; b: string; c: boolean };
 * type test = MakeNever<obj, "a" | "b">;
 * // { c: boolean; a?: never; b?: never; }
 * ```
 */
export type MakeNever<O extends EnsureNonUnionPlainObject<O>, keys extends keyof O> = _MakeNever<O, keys>;

export type _MakeNever<T, keys extends keyof T> = _SimplifyIntersection<
  Omit<T, keys> & { [k in keys]?: never }
>;
