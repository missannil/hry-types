import type { EnsureNonUnionPlainObject } from "../index";

/**
 * 获取非联合普通对象的必选属性
 * @remarks 利用 `{} extends { x?:string }` 为true的特性
 */
export type RequiredKeys<O extends EnsureNonUnionPlainObject<O>> = _RequiredKeys<O>;

export type _RequiredKeys<O> = {
  [K in keyof O]-?: {} extends Pick<O, K> ? never : K;
}[keyof O];
