import type { IsPureObject } from "../Any/IsPureObject";

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
  Valid = object,
  Error extends string = "只能是纯对象",
> = IsPureObject<T> extends true ? Valid : Error;

// type xxx<T extends EnsurePlainObject<T, object>> = T;

// type test1 = xxx<{ a: 1 }>; // { a: 1 }

// type test2 = xxx<unknown[]>; // Error: 只能是纯对象

// type test3 = xxx<() => void>; // Error: 只能是纯对象

// type test4 = xxx<null>; // Error: 只能是纯对象

// type test5 = xxx<undefined>; // Error: 只能是纯对象

// type test6 = xxx<string>; // Error: 只能是纯对象

// type test7 = xxx<number>; // Error: 只能是纯对象

// type test8 = xxx<symbol>; // Error: 只能是纯对象

// type test9 = xxx<bigint>; // Error: 只能是纯对象

// type test10 = xxx<boolean>; // Error: 只能是纯对象

// type test11 = xxx<Map<any, any>>; // Error: 只能是纯对象

// type test12 = xxx<Set<any>>; // Error: 只能是纯对象

// type test13 = xxx<Date>; // Error: 只能是纯对象

// type test14 = xxx<RegExp>; // Error: 只能是纯对象

// type Test15 = xxx<never>; // never  这里是正常的，因为 never 是所有类型的子类型，即使验证返回的是 Error，好比 never extends Error ? never : Error，所以结果还是 never。
