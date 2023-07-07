import type { IsNever } from "../Any/IsNever";
import type { Last } from "../Union/Last";
import type { ComputeIntersection } from "./_api";

type _ComputeUnionOfTwoObject<
  O1,
  O2,
  SameKey extends Extract<keyof O1, keyof O2> = Extract<keyof O1, keyof O2>,
> = ComputeIntersection<
  & { [k in SameKey]: O1[k] | O2[k] }
  & Omit<O1, SameKey>
  & Omit<O2, SameKey>
>;

type __ComputeUnion<U, Result, Tail = Last<U>> = IsNever<U> extends true ? Result
  : __ComputeUnion<Exclude<U, Tail>, _ComputeUnionOfTwoObject<Result, Tail>>;

type _ComputeUnion<U, Tail = Last<U>> = [U] extends [Tail] ? U : __ComputeUnion<Exclude<U, Tail>, Tail>;

/**
 * @description 计算联合对象类型,规则:相同key的类型联合,不同key类型交叉
 * @param U union object
 * @example
 * ```ts
 * import { type O } from 'hry-types'
 * type Test = O.ComputeUnion<{ id: string } | { id:number; age: number }>;
 * // =>{ id: string | number ; age: number; }
 * ```
 * @returns object
 */
export type ComputeUnion<U> = _ComputeUnion<U>;
