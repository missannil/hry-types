import type { IfEquals } from "../Any/IfEquals";

/**
 * 排除T中等于M的项,返回剩余项
 * @remarks 解决内置Exclude的一些问题,因为内置Exclude是使用extends判断的,所以会出现下面的问题
 * ```ts
 * type test = Exclude<{a:string} | {},{} > // => never
 * type test1 = ExcludeEqual<{a:string} | {},{} > // => { a:string }
 * type Test2 = ExcludeEqual<{ a?: string; b: number } | { b: number }, { b: number }>; // => { a?: string; b: number }
 * ```
 */
export type ExcludeEqual<T, M> = T extends unknown ? IfEquals<T, M, never, T> : never;
