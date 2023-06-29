/**
 * 联合变交叉
 * @param U is union type (A1 | A2 | A3 ...)
 * @returns (A1 & A2 & A3 ...)
 * @link [test file](./IntersectOf.test.ts)
 */
export type IntersectOf<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
