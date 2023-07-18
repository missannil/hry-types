/**
 * 深度去除readonly
 * @param T 要去除readonly的对象或数组
 * @example
 * ```ts
 * import { type O, type NonReadonlyDeep , TypeChecking} from 'hry-types'
 *
 * type Obj = { readonly obj: { readonly a: string; readonly b?: number } };
 * type TestObj = NonReadonlyDeep<Obj>;
 * // TestObj => { obj: { a: string; b?: number } };
 *
 * type Arr = readonly [1, readonly [1, 2, 3], 3];
 * type TestArr = NonReadonlyDeep<Arr>;
 * // TestArr => [1, [1, 2, 3], 3];
 * ```
 * @returns object or array
 */
export type NonReadonlyDeep<O> = O extends Function ? O : {
  -readonly [k in keyof O]: O[k] extends object ? NonReadonlyDeep<O[k]> : O[k];
};
