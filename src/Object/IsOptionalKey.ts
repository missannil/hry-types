import type { EnsureNonUnionPlainObject } from "../index";

/**

* 判断对象 O 中的属性 K 是否为可选属性。
*
* @remarks
* O 必须是非联合的普通对象类型。
*
* 通过 `{}` 是否可以赋值给 `Pick<O, K>` 判断属性是否为可选：
* * 可选属性：`{} extends Pick<O, K>` 为 `true`。
* * 必选属性：`{} extends Pick<O, K>` 为 `false`。
*
* @param O - 非联合的普通对象类型。
* @param K - O 中的属性 Key。
*
* @example
* ```ts
* type Test1 = IsOptionalKey<{ a: string }, "a">;
* // false
*
* type Test2 = IsOptionalKey<{ a?: string }, "a">;
* // true
*
* type Test3 = IsOptionalKey<{
* a: string;
* b?: number;
* }, "b">;
* // true
* ```
*
* @see {@link OptionalKeys}
* @see {@link RequiredKeys}
  */
export type IsOptionalKey<
  O extends EnsureNonUnionPlainObject<O>,
  K extends keyof O,
> = _IsOptionalKey<O, K>;

export type _IsOptionalKey<O, K extends keyof O> = {} extends Pick<O, K> ? true : false;
