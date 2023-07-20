/**
 * 去除readonly字段(非深度)
 * @param T - 对象或数组
 * @example
 * ```ts
 * type Obj = { readonly num: 123; readonly str?: string;};
 * type TestObj = NonReadonly<Obj>;
 * // TestObj => { num: 123; str?: string};
 *
 * type Arr = readonly [1, 2, 3];
 * type TestArr = NonReadonly<Arr>;
 * // TestArr => [1, 2, 3];
 * ```
 * @returns object or array
 */
export type NonReadonly<O> = { -readonly [k in keyof O]: O[k] };
