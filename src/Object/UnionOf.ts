import type { ComputeIntersection } from "./ComputeIntersection";

/**
 * @description 从两个对象中取出共有的属性,并将其值合并为联合类型,其余属性保留原来的类型
 * @example
 * ```ts
 * import type { O } from "hry-types";
 * type O1 = { a: string; b: number; c: boolean };
 * type O2 = { a: number; b: string; d: string };
 * type test = O.UnionOf<O1, O2>;
 * // { a: string | number; b: number | string; c: boolean; d: string }
 * ```
 */
export type UnionOf<
  O1,
  O2,
  SameKey extends Extract<keyof O1, keyof O2> = Extract<keyof O1, keyof O2>,
> = ComputeIntersection<
  & { [k in SameKey]: O1[k] | O2[k] }
  & Omit<O1, SameKey>
  & Omit<O2, SameKey>
>;
