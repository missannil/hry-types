/**
 * 合并两个对象,相同key类型联合,其余key不变
 * @example
 * ```ts
 * type O1 = { a: string; b: number; c: boolean };
 * type O2 = { a: number; b: string; d: string };
 * type Test = UnionOf<O1, O2>;
 * // =>{ a: string | number; b: number | string; c: boolean; d: string }
 * ```
 */
export type UnionTwoObject<
  O1,
  O2,
  SameKey extends Extract<keyof O1, keyof O2> = Extract<keyof O1, keyof O2>,
> =
  & { [k in SameKey]: O1[k] | O2[k] }
  & Omit<O1, SameKey>
  & Omit<O2, SameKey>;
