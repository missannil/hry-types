/**
 * 去除readonly(非深度去除)
 * @param T 要去除readonly的对象或数组
 * @example
 * ```ts
 * import { type O, type NonReadonly , TypeChecking} from 'hry-types'
 *
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
