/**
 * 计算交叉对象类型
 * @remarks 相同key会被合并为一个字段，类型交叉。多个对象中存在相同key时,可能出现结果为never
 * @see  {@link https://github.com/microsoft/TypeScript/issues/54903 |issue 54903}
 * @param O - 对象类型
 * @example
 * ```ts
 * type Test1 = ComputeIntersection<{ name: string } & { age: number }>;
 *  // =>{ name: string; age: number; }
 * type Test2 = ComputeIntersection<{ name: string } & { name: number }>;
 * // =>{ name: never; }
 * ```
 * @returns object
 */
export type ComputeIntersection<O> = O extends unknown ? { [K in keyof O]: O[K] } : never;
