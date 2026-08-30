import type { As } from "../Any/As";
import type { IsSomeExtends } from "../Any/IsSomeExtends";
import type { Func } from "../Basic/Func";
import type { EnsureNonUnionPlainObject } from "../Constraint/_index";
/**
 * 将非联合的普通对象 `O` 中的函数类型映射为其返回值类型。
 *
 * @remarks
 * 遍历对象 `O` 的所有属性：
 *
 * - 属性值为函数类型时，将其转换为该函数的返回值类型。
 * - 属性值不是函数类型时，保持原类型不变。
 *
 * 对象本身的属性修饰符（如 `?`、`readonly`）会被保留。
 *
 * 该类型要求 `O` 为非联合的普通对象类型，不适用于数组、函数等非普通对象类型。
 *
 * @example
 *
 * ```ts
 * type TestObj = {
 *   num: 123;
 *   fn: () => string;
 * };
 *
 * type Result = MapReturnType<TestObj>;
 *
 * // {
 * //   num: 123;
 * //   fn: string;
 * // }
 * ```
 *
 * @returns 将对象中的函数属性转换为返回值类型后的对象类型。
 */
export type MapReturnType<
  O extends EnsureNonUnionPlainObject<O>,
> = _MapReturnType<O>;

export type _MapReturnType<O> = {
  [K in keyof O]: IsSomeExtends<O[K], Func> extends true ? ReturnType<As<O[K], Func>>
    : O[K];
};
