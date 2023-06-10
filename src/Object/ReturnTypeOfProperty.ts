import { type AnyObject, ExpectType } from "..";

/**
 * 把对象子属性类型为函数类型的,变为函数返回类型
 * ```ts
 * type A = ReturnTypeOfProperty<{ fun: () => number; num: number }>;
 * type Expect = {
 *   fun: number;
 *   num: number;
 * };
 * ExpectType<A, Expect, true>();
 * ```
 * @returns object
 */
export type ReturnTypeOfProperty<O extends AnyObject> = {
  [k in keyof O]: O[k] extends Function ? ReturnType<O[k]> : O[k];
};

// test

type A = ReturnTypeOfProperty<{ fun: () => number; num: number }>;
type Expect = {
  fun: number;
  num: number;
};
ExpectType<A, Expect, true>();
