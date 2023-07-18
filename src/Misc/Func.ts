/**
 * 函数构建器, 用于构建函数类型
 * @remarks 为了更便捷书写函数类型,使得复杂泛型中的函数类型更易读。当然是否使用该类型取决于你的个人喜好。
 * @param P - 函数参数列表 类型元组 默认any[]
 * @param R - 函数返回类型 Any类型 默认any
 * @returns  Fuction
 * @example
 * ```ts
 * type DefaultIsAnyFuction = Func;
 * // DefaultIsAnyFuction => (...args: any[]) => any
 * type fn = Func<[string, number], boolean>;
 * // fn => (args_0: string, args_1: number) => boolean
 * ```
 */
export type Func<P extends any[] = any[], R = any> = (...args: P) => R;
