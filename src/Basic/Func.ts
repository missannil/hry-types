/**
 * 表示一个函数类型。
 *
 * @remarks
 * `P` 用于指定函数参数类型，`R` 用于指定函数返回值类型。
 * 默认情况下不限制参数和返回值类型。
 *
 * @param P - 函数参数类型元组，默认为 `any[]`。
 * @param R - 函数返回值类型，默认为 `any`。
 * @returns 函数类型。
 *
 * @example
 * ```ts
 * type Test1 = Func; // (...args: any[]) => any
 * type Test2 = Func<[string, number], boolean>; // (arg0: string, arg1: number) => boolean
 * type Test3 = Func<[], void>; // () => void
 * ```
 */
export type Func<P = any, R = any> = P extends any[] ? (...args: P) => R : (...args: P & any[]) => R;
