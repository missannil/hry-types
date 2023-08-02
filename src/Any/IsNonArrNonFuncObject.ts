/**
 * 判断A是否为非数组非函数的对象
 * @param O - 对象类型
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = IsNonArrNonFuncObject<{ a: number }> // true
 * type Test2 = IsNonArrNonFuncObject<() => any> // false
 * type Test3 = IsNonArrNonFuncObject< unknown[] > // false
 * type Test4 = IsNonArrNonFuncObject<readonly [1,2,3] > // false
 * ```
 */
export type IsNonArrNonFuncObject<O> = O extends Function ? false
  : O extends ReadonlyArray<unknown> ? false
  : O extends object ? true
  : false;
