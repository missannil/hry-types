import type { IsPlainObject } from "../Any/IsPlainObject";

/**
 * 纯对象验证器。
 * @param O - 待验证的类型
 * @param Valid - 验证通过时返回的类型
 * @param Error - 验证失败时返回的错误信息
 * @returns O 为纯对象时返回 Valid，否则返回 Error
 * @example
 * ```ts
 * type Test1 = EnsurePlainObject<{ a: 1 }, object>; //  object
 * type Test2 = EnsurePlainObject<unknown[], object>; // "只能是纯对象"
 * type Test3 = EnsurePlainObject<() => void, object>; // "只能是纯对象"
 * type Test4 = EnsurePlainObject<null, object>; // "只能是纯对象"
 * type Test5 = EnsurePlainObject<undefined, object>; // "只能是纯对象"
 * type Test6 = EnsurePlainObject<string, object>; // "只能是纯对象"
 * type Test7 = EnsurePlainObject<number, object>; // "只能是纯对象"
 * type Test8 = EnsurePlainObject<symbol, object>; // "只能是纯对象"
 * type Test9 = EnsurePlainObject<bigint, object>; // "只能是纯对象"
 * type Test10 = EnsurePlainObject<boolean, object>; // "只能是纯对象"
 * type Test11 = EnsurePlainObject<Map<any, any>, object>; // "只能是纯对象"
 * type Test12 = EnsurePlainObject<Set<any>, object>; // "只能是纯对象"
 * type Test13 = EnsurePlainObject<Date, object>; // "只能是纯对象"
 * type Test14 = EnsurePlainObject<RegExp, object>; // "只能是纯对象"
 * type Test15 = EnsurePlainObject<never, object>; //  "只能是纯对象"
 * ```
 */
export type EnsurePlainObject<
  T,
  Constraint = object,
  Error extends string = "只能是纯对象",
> = IsPlainObject<T> extends true ? Constraint : Error;
