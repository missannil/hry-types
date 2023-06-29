import type { IntersectOf } from "./IntersectOf";
/**
 * Get the last element's type of [[Union]]
 * (⚠️ it might not preserve order)
 * @param U
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type Last<U> = IntersectOf<U extends unknown ? (x: U) => void : never> extends (x: infer P) => void ? P
  : never;
