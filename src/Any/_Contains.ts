/**
 * 判断A1是否含有A2的子类型,多与Is配合使用。
 * @param A1 - Any类型
 * @param A2 - Any类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = _Contains<1 | "a", 1>; // true
 * type Test2 = _Contains<1 | "a", "a">; // true
 * type Test3 = _Contains<1 | "a", number>; // true
 * type Test4 = _Contains<1 | "a", string>; // true
 * type Test5 = _Contains<1 | "a", boolean>; // false
 * type Test6 = _Contains<1 | "a", boolean | string>; // true
 * type Test7 = _Contains<1 | "a", boolean | number>; // true
 * ```
 */
export type _Contains<A1, A2> = true extends (A1 extends A2 ? true : false) ? true : false;
