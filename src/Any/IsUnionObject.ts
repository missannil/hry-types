import type { IsNonArrNonFuncObject } from "./IsNonArrNonFuncObject";
import type { IsUnion } from "./IsUnion";

/**
 * @description Check if `T` is a union object type.
 * @link [test](./IsUnionObject.test.ts)
 * @returns true or false
 */
export type IsUnionObject<T> = IsUnion<T> extends true ? IsNonArrNonFuncObject<T> extends true ? true : false : false;
