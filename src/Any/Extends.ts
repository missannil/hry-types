/**
 * 判断[A1]是否为[A2]的子类型.
 * @remarks  泛型A1为联合类型时,不会分发判断。
 * @param A1 - Any类型
 * @param A2 - Any类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = Extends<1, number>; // true
 * type Test2 = Extends<1, string | number>; // true
 * type Test3 = Extends<1 | string, number>; // false
 * ```
 */
export type Extends<A1, A2> = [A1] extends [A2] ? true : false;
