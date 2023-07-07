/**
 * @description 计算交叉对象类型 要求对象的key不可重复
 * @param O object
 * @template
 * ```ts
 *  import { type O } from 'hry-types'
 *
 *  type Test = O.ComputeIntersection<{ name: string } & { age: number }>;
 *  // =>{ name: string; age: number; }
 *
 * ```
 * @see 当对象中存在相同key时，可能出现never结果 {@link https://github.com/microsoft/TypeScript/issues/54903 issue}
 *   @return object
 */
export type ComputeIntersection<O> = { [K in keyof O]: O[K] };
