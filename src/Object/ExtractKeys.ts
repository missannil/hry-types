import type { _Match } from "../_internal/_Match";
import type { _Scope } from "../_internal/_Scope";
import type { EnsureNonUnion, EnsureNonUnionPlainObject, Is, OptionalKeys, RequiredKeys } from "../index";
import type { _OptionalKeys } from "./OptionalKeys";
import type { _RequiredKeys } from "./RequiredKeys";

/**
 * 提取对象 O 中值类型匹配 M 的属性 Key。
 *
 * @remarks
 * `SelectKeys` 首先根据 `filter` 筛选参与匹配的属性，
 * 然后将筛选后的属性统一转换为必选属性，最后根据 `match`
 * 判断属性值类型是否匹配 M。
 *
 * `filter` 支持以下值：
 *
 * - `"all"` - 所有属性，默认值。
 * - `"required"` - 仅匹配必选属性。
 * - `"optional"` - 仅匹配可选属性。
 *
 * 筛选后的属性会统一转换为必选属性，以避免可选属性的 `?`
 * 在通过 `O[K]` 获取属性类型时引入 `undefined`，从而影响值类型匹配。
 *
 * 例如：
 *
 * ```ts
 * type Obj = {
 *   a: number;
 *   b?: string;
 * };
 *
 * type Test1 = SelectKeys<Obj, string>;
 * // "b"
 *
 * type Test2 = SelectKeys<
 *   Obj,
 *   string,
 *   "allExtends->",
 *   "required"
 * >;
 * // never
 *
 * type Test3 = SelectKeys<
 *   Obj,
 *   string,
 *   "allExtends->",
 *   "optional"
 * >;
 * // "b"
 * ```
 *
 * `O` 必须是非联合的普通对象类型。
 *
 * @param O - 非联合的普通对象类型。
 * @param M - 匹配类型。
 * @param match - 值类型的匹配方式，默认为 `"allExtends->"`。
 * @param filter - 属性过滤方式，默认为 `"all"`。
 *
 * @returns 匹配的属性 Key 联合类型。
 *
 * @see {@link Is}
 * @see {@link RequiredKeys}
 * @see {@link OptionalKeys}
 */
export type ExtractKeys<
  O extends EnsureNonUnionPlainObject<O>,
  M,
  match extends EnsureNonUnion<match, _Match> = "allExtends->",
  Scope extends _Scope = "all",
> = __ExtractKeys<_FilterKeys<O, Scope>, M, match>;

export type _ExtractKeys<
  O,
  M,
  match extends _Match = "allExtends->",
  Scope extends _Scope = "all",
> = __ExtractKeys<_FilterKeysLoose<O, Scope>, M, match>;

/**
 * 根据属性是否为可选属性过滤对象。
 *
 * @remarks
 * `filter` 为 `"required"` 时，仅保留必选属性；
 * `filter` 为 `"optional"` 时，仅保留可选属性；
 * `filter` 为 `"all"` 时，保留所有属性。
 *
 * 最终使用 `Required` 把 `optional` 和 `all` 的属性统一转换为必选属性，
 * 避免可选属性在通过 `O[K]` 获取类型时引入 `undefined`，
 * 从而影响后续的值类型匹配。
 */
type _FilterKeys<
  O extends EnsureNonUnionPlainObject<O>,
  Scope extends _Scope,
> = Scope extends "required" ? Pick<O, RequiredKeys<O>>
  : Scope extends "optional" ? Required<Pick<O, OptionalKeys<O>>>
  : Required<O>;

type _FilterKeysLoose<O, Scope extends _Scope> = Scope extends "required" ? Pick<O, _RequiredKeys<O>>
  : Scope extends "optional" ? Required<Pick<O, _OptionalKeys<O>>>
  : Required<O>;

/**
 * 根据值类型匹配方式，从对象 O 中筛选属性 Key。
 */
type __ExtractKeys<
  O,
  M,
  match extends EnsureNonUnion<match, _Match>,
> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? K : never;
}[keyof O];
