/**
 * Alias to create a [[Function]]
 * @param P parameters list
 * @param R return type
 * @returns [[Function]]
 * @example
 * ```ts
 * import {F} from 'hry-types'
 *
 * type test0 = F.Function<[string, number], boolean>
 * // (args_0: string, args_1: number) => boolean
 * ```
 */
export type Function<P extends any[] = any[], R = any> = (...args: P) => R;
