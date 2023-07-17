/**
 * 降低泛型推导的优先级
 * @param G - 泛型 any
 * @returns G
 * @example
 * ```ts
 * const fn = <A>(a0: A, a1: A) => ({} as any);
 *
 * fn("a", "b"); // ok test => a | b
 *
 * const fn0 = <A extends string>(a0: A, a1: NoInfer<A>) => ({} as any)
 *
 * // @ts-expect-error  类型“"b"”的参数不能赋给类型“"a"”的参数
 * fn0("a", "b");
 * ```
 * @see https://github.com/microsoft/TypeScript/issues/14829
 */

export type NoInfer<G = unknown> = [G][G extends unknown ? 0 : never];
