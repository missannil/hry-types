import type { AnyFunction } from "../Misc/AnyFunction";
import type { IsNever } from "./IsNever";

/**
 * @description is object but not array and function
 * @link [test](./IsNonArrNonFuncObject.test.ts)
 * @returns true or false
 */
export type IsNonArrNonFuncObject<T> = IsNever<T> extends true ? false
  : T extends AnyFunction ? false
  : T extends unknown[] ? false
  : T extends object ? true
  : false;
