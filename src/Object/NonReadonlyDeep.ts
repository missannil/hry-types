/**
 * 深度去除readonly字段
 * @param T - 对象或数组
 * @example
 * ```ts
 * type Test1 = NonReadonlyDeep<{ readonly num: 123; readonly str?: string }>;
 * // => { num: 123; str?: string};
 * type Test2 = NonReadonlyDeep<readonly [1, readonly [1, 2, 3], 3]>;
 * // => [1, [1, 2, 3], 3];
 * type Test3 = NonReadonlyDeep<{ readonly obj: { readonly a: string; readonly b?: number } }>;
 * // => { obj: { a: string; b?: number } };
 * type Test4 = NonReadonlyDeep<readonly [1, readonly [1, 2, 3], 3]>;
 * // => [1, [1, 2, 3], 3];
 * ```
 * @returns T
 */
export type NonReadonlyDeep<O> = O extends Function ? O : {
  -readonly [k in keyof O]: O[k] extends object ? NonReadonlyDeep<O[k]> : O[k];
};
