import type { ComputeIntersection } from "./ComputeIntersection";
import type { OptionalKeys } from "./OptionalKeys";

/**
 * Make some keys of an object required.
 * 指定对象的某些键为必填
 * @example
 * ```ts
 * type PartialObj = { a?: number; b?: string; c?: boolean };
 * type RequiredObj = MakeRequired<PartialObj, "a" | "b">;
 * // { a: number; b: string; c?: boolean }
 * ```
 */
export type MakeRequired<T extends object, K extends OptionalKeys<T>> = ComputeIntersection<
  Omit<T, K> & Required<Pick<T, K>>
>;
