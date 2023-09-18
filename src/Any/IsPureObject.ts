/**
 * 检查`O`是否为纯对象。
 * @remarks 纯对象是指除了 `Date`、`RegExp`、`Function`、`ReadonlyArray<uknown>`的object类型
 *  @example
 * ```ts
 * type Test1 = IsPureObject<{ a: number }> // true
 * type Test2 = IsPureObject<() => any> // false
 * type Test3 = IsPureObject< unknown[] > // false
 * type Test4 = IsPureObject<readonly [1,2,3] > // false
 * ```
 * @returns 返回 `true` 或 `false`。
 */
export type IsPureObject<O> = O extends Date | RegExp | Function | ReadonlyArray<unknown> ? false
  : O extends object ? true
  : false;
