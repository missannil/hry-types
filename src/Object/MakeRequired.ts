import type { EnsureNonUnionPlainObject } from "../Constraint/EnsureNonUnionPlainObject";
import type { _SimplifyIntersection } from "./_index";
import type { OptionalKeys } from "./OptionalKeys";

/**
 * 指定对象的某些键为必填
 * @example
 * ```ts
 * type PartialObj = { a?: number; b?: string; c?: boolean };
 * type RequiredObj = MakeRequired<PartialObj, "a" | "b">;
 * // { a: number; b: string; c?: boolean }
 * ```
 */
export type MakeRequired<O extends EnsureNonUnionPlainObject<O>, K extends OptionalKeys<O>> = _MakeRequired<O, K>;

export type _MakeRequired<T, K extends keyof T> = _SimplifyIntersection<
  Omit<T, K> & Required<Pick<T, K>>
>;
