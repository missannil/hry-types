import type { IsNonArrNonFuncObject } from "./_api";

/**
 * 递归计算交叉对象类型
 * @remarks 相同key会被合并为一个字段。多个对象中存在相同key时,可能出现结果为never
 * @see  {@link https://github.com/microsoft/TypeScript/issues/54903 |issue 54903}
 * @param O -  object
 * @example
 * ```ts
 * type obj0 = { a: { b: string } & { c: number } };
 * type obj1 = { e: { f: string } & { g: number } };
 * type test1 = ComputeDeep<obj0 & obj1>;
 * // =>{ a: { b: string; c: number; }; e: { f: string; g: number; }; }
 * ```
 *   @returns object
 */
export type ComputeDeep<O> = IsNonArrNonFuncObject<O> extends true ? {
    [K in keyof O]: ComputeDeep<O[K]>;
  }
  : O;
