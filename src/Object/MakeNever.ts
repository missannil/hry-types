import type { ComputeIntersection } from "./_api";

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
export type MakeNever<T extends object, keys extends keyof T> = ComputeIntersection<
  Omit<T, keys> & { [k in keys]?: never }
>;
