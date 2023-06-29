import type { IsNonArrNonFuncObject } from "../Any/IsNonArrNonFuncObject";

/**
 * @description 合并交叉对象类型
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 * type Res = O.MergeIntersection<{ name: string } & { age: number }>;
 * // type Res = { name: string; age: number; }
 * ```
 * @return object
 */
export type ComputeIntersection<T> = IsNonArrNonFuncObject<T> extends true
  ? { [K in keyof T]: ComputeIntersection<T[K]> }
  : T;
