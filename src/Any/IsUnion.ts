import type { Equals } from "./Equals";

/**
 * @description Check if `T` is a union type.
 * @link [test](./IsUnion.test.ts)
 * @returns true or false
 */
export type IsUnion<T, O = T> = [T] extends [never] ? false
  : O extends T ? Equals<[T], [O]> extends true ? false : true
  : never;
