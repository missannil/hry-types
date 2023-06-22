import type { IsNever } from "../Any/_api";

/**
 * 去除对象类型中包含的undefined和null类型,若结果为never,则去除该字段
 */
export type NonNullable<T extends object> = {
  [k in keyof T as IsNever<T[k] & {}> extends true ? never : k]: T[k] & {};
};
