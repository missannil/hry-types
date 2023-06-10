import type { Match } from "..";
import type { SelectKeys } from "./SelectKeys";

/**
 * Extract the fields of `O` that match `M`
 * @param O to extract from
 * @param M to select fields
 * @param match (?=`'default'`) to change precision
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Select<O extends object, M, match extends Match = "default"> = Pick<O, SelectKeys<O, M, match>>;
