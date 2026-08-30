import type { _Match } from "../_internal/_Match";

import type { _Scope } from "../_internal/_Scope";

import type { EnsureNonUnion } from "../Constraint/EnsureNonUnion";

import type { EnsureNonUnionPlainObject } from "../Constraint/EnsureNonUnionPlainObject";
import type { As } from "../index";

/**
 * 从对象 `O` 中选取值类型与 `M` 匹配的属性。
 *
 * @remarks
 * `Select` 根据 `Match` 指定的匹配方式，从 `O` 中选取值类型
 * 与 `M` 匹配的属性，并返回由这些属性组成的新对象类型。
 *
 * `Scope` 用于指定参与匹配的属性范围：
 *
 * - `"all"` - 所有属性，默认值。
 * - `"required"` - 仅必选属性。
 * - `"optional"` - 仅可选属性。
 *
 * `Scope` 只影响属性的匹配范围，不会改变最终返回对象中属性
 * 原本的可选性和 `readonly` 修饰符。
 *
 * `Match` 用于指定值类型的匹配方式，默认为 `"allExtends->"`。
 *
 * ```ts
 * type Obj = {
 *   num: number;
 *   str?: string;
 *   bool: boolean;
 * };
 *
 * type Test1 = Select<Obj, string>;
 * // {
 * //   str?: string;
 * // }
 *
 * type Test2 = Select<
 *   Obj,
 *   string,
 *   "allExtends->",
 *   "required"
 * >;
 * // {}
 *
 * type Test3 = Select<
 *   Obj,
 *   string,
 *   "allExtends->",
 *   "optional"
 * >;
 * // {
 * //   str?: string;
 * // }
 * ```
 *
 * @param O - 非联合的普通对象类型。
 * @param M - 匹配类型。
 * @param Match - 值类型的匹配方式，默认为 `"allExtends->"`。
 * @param Scope - 参与匹配的属性范围，默认为 `"all"`。
 *
 * @returns 包含匹配属性的新对象类型。
 */
export type Select<
  O extends EnsureNonUnionPlainObject<O>,
  M,
  Match extends EnsureNonUnion<Match, _Match> = "allExtends->",
  Scope extends _Scope = "all",
> = _Select<O, M, Extract<Match, _Match>, Scope>;

export type _Select<
  O,
  M,
  Match extends _Match = "allExtends->",
  Scope extends _Scope = "all",
> = Pick<
  O,
  As<import("./ExtractKeys")._ExtractKeys<O, M, Match, Scope>, keyof O>
>;
