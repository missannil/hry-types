import type { EnsurePlainObject, IsAny, IsNever } from "../index";
import type { _SimplifyIntersection } from "./SimplifyIntersection";
/**
 * 合并两个对象，相同 Key 的属性类型取联合类型，其余属性保持不变。
 *
 * @remarks
 * - 两个对象都存在的 Key，其属性类型取 `O1[K] | O2[K]`。
 * - 仅存在于其中一个对象的 Key，保持原属性类型不变。
 * - `any` 与对象合并时返回另一个对象。
 * - `never` 与对象合并时返回另一个对象。
 *
 * @example
 *
 * ```ts
 * type O1 = {
 *   a: string;
 *   b: number;
 *   c: boolean;
 * };
 *
 * type O2 = {
 *   a: number;
 *   b: string;
 *   d: string;
 * };
 *
 * type Result = MergeUnion<O1, O2>;
 *
 * // {
 * //   a: string | number;
 * //   b: number | string;
 * //   c: boolean;
 * //   d: string;
 * // }
 * ```
 *
 * @returns 合并后的对象类型。
 */
export type MergeUnion<
  O1 extends EnsurePlainObject<O1>,
  O2 extends EnsurePlainObject<O2>,
> = _MergeUnion<O1, O2>;

export type _MergeUnion<O1, O2> = true extends IsAny<O1> ? O2
  : true extends IsAny<O2> ? O1
  : true extends IsNever<O1> ? O2
  : true extends IsNever<O2> ? O1
  : __MergeUnion<O1, O2>;

type __MergeUnion<
  O1,
  O2,
  SameKey extends Extract<keyof O1, keyof O2> = Extract<
    keyof O1,
    keyof O2
  >,
> = _SimplifyIntersection<
  & {
    [K in SameKey]: O1[K] | O2[K];
  }
  & Omit<O1, SameKey>
  & Omit<O2, SameKey>
>;
