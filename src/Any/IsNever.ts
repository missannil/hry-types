/**
 * @description Check if `T` is `never`.
 * @link [test](./IsNever.test.ts)
 * @returns true or false
 */
export type IsNever<T> = [T] extends [never] ? true : false;
