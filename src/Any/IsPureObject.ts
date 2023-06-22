import type { AnyFunction } from "../Misc/AnyFunction";
import type { IsNever } from "./IsNever";

/**
 * @description 纯对象判断,即非数组和函数的对象
 */
export type IsPureObject<T> = IsNever<T> extends true ? false
  : T extends AnyFunction ? false
  : T extends unknown[] ? false
  : T extends object ? true
  : false;