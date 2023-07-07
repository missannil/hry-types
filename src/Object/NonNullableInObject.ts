import type { IsNever } from "../Any/_api";

/**
 * 去除对象类型中包含的undefined和null类型,若结果为never,则去除该字段
 * @example
 * ```ts
 * type Obj1 = { a: number | undefined; b?: string; c: null; d: boolean };
 * type Test1 = NonNullableInObject<Obj1>;
 * // => { a: number; b?: string; d: boolean }
 *
 * type Obj2 = { a: undefined; b: null };
 * type Test2 = NonNullableInObject<Obj2>;
 * // => {}
 *
 * type Obj3 = { a: undefined | null };
 * type Test3 = NonNullableInObject<Obj3>;
 * // => {}
 *
 * type Obj4 = { a: never };
 * type Test4 = NonNullableInObject<Obj4>;
 * // => {}
 *
 * type Obj5 = { a: { b: number } | undefined };
 * type Test5 = NonNullableInObject<Obj5>;
 * // => { a: { b: number } }
 * @returns object
 */
export type NonNullableInObject<T> = {
  [k in keyof T as IsNever<T[k] & {}> extends true ? never : k]: T[k] & {};
};
