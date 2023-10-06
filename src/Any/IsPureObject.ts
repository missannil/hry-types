/**
 * 检查`O`是否为纯对象。
 * @remarks 纯对象是指除了 `Date`、`RegExp`、`Function`、`ReadonlyArray<uknown>`、`Set`、`Map`的object类型
 * @example
 * ```ts
 * type Test0 = IsPureObject<{ a: number }> // true
 * type Test1 = IsPureObject<Date> // false
 * type Test2 = IsPureObject<RegExp> // false
 * type Test3 = IsPureObject<() => any> // false
 * type Test4 = IsPureObject< unknown[] > // false
 * type Test5 = IsPureObject<readonly [1,2,3] > // false
 * type Test6 = IsPureObject<Set<[1, 2, 3]>> // false
 * type Test7 = IsPureObject<Map<"key", "value">> // false
 * ```
 * @returns 返回 `true` 或 `false`。
 */
export type IsPureObject<O> = O extends object
  ? O extends Date | RegExp | Function | ReadonlyArray<unknown> | Set<unknown> | Map<unknown, unknown> ? false
  : true
  : false;
