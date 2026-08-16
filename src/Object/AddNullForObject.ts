import type { IsPureObject } from "../Any/IsPureObject";

/**
 * 为对象类型加入null类型。
 */
export type AddNullForObject<O> = O extends unknown ? IsPureObject<O> extends true ? (O | null) : O : never;
