import type { IsAnyOrNever } from "./IsAnyOrNever";

/**
 * 检查 `O` 是否为纯对象类型。
 *
 * @remarks
 * 纯对象类型必须为 `object`，且不能为已知的特殊对象类型，
 * 包括 `Date`、`RegExp`、`Function`、数组、`Set`、`Map`、
 * `WeakMap`、`WeakSet`、`ArrayBuffer` 和 `Promise`。
 *
 * 当 `O` 为联合类型时，会对每个成员分别进行判断，
 * 只有所有成员均为纯对象类型时才返回 `true`。
 *
 * 这里的“纯对象”是 TypeScript 类型层面的定义，
 * 用于类型判断和筛选，并不严格等同于 JavaScript
 * 运行时意义上的 Plain Object。
 *
 * @param O - 任意类型。
 * @returns `O` 为纯对象类型时返回 `true`，否则返回 `false`。
 *
 * @example
 * ```ts
 * type Test0 = IsPlainObject<{ a: number }>; // true
 * type Test1 = IsPlainObject<Date>; // false
 * type Test2 = IsPlainObject<RegExp>; // false
 * type Test3 = IsPlainObject<() => any>; // false
 * type Test4 = IsPlainObject<unknown[]>; // false
 * type Test5 = IsPlainObject<readonly [1, 2, 3]>; // false
 * type Test6 = IsPlainObject<Set<[1, 2, 3]>>; // false
 * type Test7 = IsPlainObject<Map<"key", "value">>; // false
 * type Test8 = IsPlainObject<{ a: number } | { b: string }>; // true
 * type Test9 = IsPlainObject<{ a: number } | Date>; // false
 * type Test10 = IsPlainObject<{ a: number } & { b: string }>; // true
 * type Test11 = IsPlainObject<{ a: number } & Date>; // false
 * ```
 */
export type IsPlainObject<O> = IsAnyOrNever<O> extends true ? false
  : [O] extends [object] ? false extends _IsPlainObject<O> ? false
    : true
  : false;

export type _IsPlainObject<O> = O extends
  | Date
  | RegExp
  | Function
  | ReadonlyArray<unknown>
  | Set<unknown>
  | Map<unknown, unknown>
  | WeakMap<object, unknown>
  | WeakSet<object>
  | ArrayBuffer
  | Promise<unknown> ? false
  : true;
