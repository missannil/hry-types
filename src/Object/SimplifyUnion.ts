import type { IsNever } from "../Any/IsNever";
import type { EnsureUnionPlainObject } from "../index";
import type { _ExtractUnionMember } from "../Union/ExtractUnionMember";
import type { _MergeUnion } from "./MergeUnion";

type __SimplifyUnion<U, Result, Tail = _ExtractUnionMember<U>> = IsNever<U> extends true ? Result
  : __SimplifyUnion<Exclude<U, Tail>, _MergeUnion<Result, Tail>>;

export type _SimplifyUnion<U, Tail = _ExtractUnionMember<U>> = [U] extends [Tail] ? U
  : __SimplifyUnion<Exclude<U, Tail>, Tail>;

/**
 * 简化联合对象类型,规则:相同key的类型联合,key类型保留
 * @param U - union object
 * @example
 * ```ts
 * type Test = SimplifyUnion<{ id: string } | { id:number; age: number }>;
 * // =>{ id: string | number ; age: number; }
 * ```
 * @returns object
 */
export type SimplifyUnion<U extends EnsureUnionPlainObject<U>> = _SimplifyUnion<U>;
