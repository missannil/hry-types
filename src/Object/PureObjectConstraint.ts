import type { AnyObject } from "..";
import type { IsPureObject } from "./_api";

/**
 * @description 非函数和数组对象,可做为泛型约束
 * @example
 * ```ts
 * type foo<T extends PureObjectConstraint<T>> = T;
 * type test = foo<unknown[]>; // error '非函数和数组的对象'
 * type test1 = foo<() => void>; // error '非函数和数组的对象'
 * type test2 = foo<{ name: string }>; // ok
 * interface User {
 *  name: string;
 * }
 * type test3 = foo<User>; // ok
 * interface fn {
 * name: string;
 * (): string;
 * }
 * type test4 = foo<fn>; // error '非函数和数组的对象'
 * ```
 */
export type PureObjectConstraint<T> = IsPureObject<T> extends true ? AnyObject : "非函数和数组的对象";
