/**
 * 当函数多个函数参数使用同一泛型时,告诉ts要降低哪些函数参数类型推导的优先级
 * @param A 要降低的函数泛型
 * @returns `A`
 * @example
 * ```ts
 * import {F} from 'hry-types'
 *
 * // ts 默认情况下,泛型A是 a0 | a1
 * const fn = <A>(a0: A, a1: A): A => ({} as any);
 *
 * const test = fn('a', 'b'); // test type is `a` | `b`
 *
 * // 降低a1的类型推导优先级,使得 a1 的类型推导优先级低于a0,从而使得a1的类型是从a0推导而来的
 * const fn0 = <A extends string>(a0: A, a1: NoInfer<A>): void => ({} as any);
 *
 * const test0 = fn0('a', 'b'); //错误: 类型“"b"”的参数不能赋给类型“"a"”的参数
 *
 * // 也可使用多泛型来处理这种情况，但多了泛型。复杂情况下使用泛型好一些
 * const fn1 = <A extends string, B extends A>(a0: A, a1: B): void => ({} as any);
 *
 * const test1 = fn1('a', 'b'); // 错误: 类型“"b"”的参数不能赋给类型“"a"”的参数
 * ```
 * @see https://stackoverflow.com/questions/56687668
 */
export type NoInfer<A = unknown> = A extends unknown ? A : never;

// export declare type NoInfer<A = unknown> = [
// 	A,
// ][A extends unknown ? 0 : never];
