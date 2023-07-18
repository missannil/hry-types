/**
 * 联合类型变交叉类型
 * @param U - 联合类型 as (A1 | A2 | A3 ...)
 * @returns (A1 & A2 & A3 ...)
 * @example
 * ```ts
 * type Test1 = IntersectOf<string | number>; // string & number
 * type Test2 = IntersectOf<{ a: 1 } | { b: 2 }>; // { a: 1 } & { b: 2 }
 * ```
 */
export type IntersectOf<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
