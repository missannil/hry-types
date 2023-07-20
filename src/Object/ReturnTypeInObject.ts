import type { Func } from "../Misc/Func";

/**
 * 对象中的函数类型变为返回值类型
 * @example
 * ```ts
 * type TestObj = ReturnTypeInObject<{ num: 123; fn: () => string }>;
 * // => { num: 123; fn: string }
 * ```
 * @returns object
 */
export type ReturnTypeInObject<O> = {
  [k in keyof O]: O[k] extends Func ? ReturnType<O[k]> : O[k];
};
