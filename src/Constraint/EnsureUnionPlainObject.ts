import type { IsPlainObject, IsUnion } from "../index";

/**
* 确保类型 T 为联合的普通对象类型。
*
* @remarks
* 同时满足以下条件时返回 `Valid`：
* * T 是联合类型；
* * T 是普通对象类型。
*
* 任一条件不满足时返回 `Error`。
*
* @param T - 待检查的类型。
* @param Valid - 检查通过时返回的类型，默认为 `object`。
* @param Error - 检查失败时返回的错误类型，默认为 `"只能是联合的纯对象"`。
*
* @example

* ```ts
* type Test1 = EnsureUnionPlainObject<{ a: string }>;
* // object
*
* type Test2 = EnsureUnionPlainObject<{ a: string } | { b: number }>;
* // "只能是联合的纯对象"
*
* type Test3 = EnsureUnionPlainObject<string>;
* // "只能是联合的纯对象"
* ```
  */
export type EnsureUnionPlainObject<
  T,
  Constraint = object,
  Error extends string = "只能是联合的纯对象",
> = IsUnion<T> extends true ? IsPlainObject<T> extends true ? Constraint : Error : Error;
