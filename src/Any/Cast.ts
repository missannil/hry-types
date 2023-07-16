/**
 * A1为A2的子类型返回A1,否则返回A2
 * @remarks 没想好为什么要这么写,先放着吧
 * @param A1 - 输入的类型
 * @param A2 - 比对的类型
 * @example
 * ```ts
 * type Test1 = Cast<0, number> // 0
 * ```
 * @returns A1 or A2
 */
// export type Cast<A1, A2> = [A1] extends [A2] ? A1 : A2;
