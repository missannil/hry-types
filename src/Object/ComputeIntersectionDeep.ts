import type { IsNonArrNonFuncObject } from "../Any/IsNonArrNonFuncObject";

/**
 * @description 深度计算交叉对象类型 要求对象的key不可重复
 * @param O object
 * @template
 * ```ts
 *  import { type O } from 'hry-types'
 *
 * type Test = ComputeIntersectionDeep<{ a: { b: string } & { c: number } } & { d: { e: string } & { f: number } }>;
 *
 * // { a: { b: string;  c: number; };  d: { e: string;  f: number; } }
 *
 * ```
 * @see 当对象中存在相同key时，可能出现结果为never {@link https://github.com/microsoft/TypeScript/issues/54903 issue}
 *   @return object
 */
export type ComputeIntersectionDeep<O> = {
  [K in keyof O]: IsNonArrNonFuncObject<O> extends true ? ComputeIntersectionDeep<O[K]> : O;
};
