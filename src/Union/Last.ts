import type { IntersectOf } from "./IntersectOf";
/**
 * 获取联合类型的最后一个元素
 * (⚠️ it might not preserve order)
 * @param U - 联合类型 ( A1 | A2 | A3 )
 * @returns Any ( A3 )
 * @example
 * ```ts
 * type Test0 = Last<[1, 2, 3]>; //  3
 * type Test1 = Last<["a", "b", "c"]>; // "c"
 * ```
 */
export type Last<U> = IntersectOf<U extends unknown ? (x: U) => void : never> extends (x: infer P) => void ? P
  : never;
