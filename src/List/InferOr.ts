import type { IsNever } from "../Any/IsNever";
import type { OrSign } from "./Or";

/**
 * 如果为Or数组,返回原始数组,否则返回false
 * @example
 * ```ts
 * import { type L, type Test,type OrSign, TypeChecking } from "hry-types";
 *
 * TypeChecking<L.Or<[1, 2]>, [1, 2, OrSign], Test.Pass>;
 *
 * ```
 */
export type InferOr<T> = IsNever<T> extends true ? false : T extends [...infer R extends unknown[], OrSign] ? R : false;
