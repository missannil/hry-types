/**
 * 判断A是否为never类型
 * @param A - 任意类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = IsNever<never> // true
 * type Test2 = IsNever<undefined> // false
 * ```
 */
export type IsNever<A> = [A] extends [never] ? true : false;
