import type { IsNever } from "../Any/IsNever";
import type { Last } from "../Union/Last";
import type { UnionTwoObject } from "./UnionTwoObject";

type __ComputeUnion<U, Result, Tail = Last<U>> = IsNever<U> extends true ? Result
  : __ComputeUnion<Exclude<U, Tail>, UnionTwoObject<Result, Tail>>;

type _ComputeUnion<U, Tail = Last<U>> = [U] extends [Tail] ? U : __ComputeUnion<Exclude<U, Tail>, Tail>;

/**
 * 计算联合对象类型,规则:相同key的类型联合,key类型保留
 * @param U - union object
 * @example
 * ```ts
 * type Test = O.ComputeUnion<{ id: string } | { id:number; age: number }>;
 * // =>{ id: string | number ; age: number; }
 * ```
 * @returns object
 */
export type ComputeUnion<U> = _ComputeUnion<U>;
