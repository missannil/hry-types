import type { IfEquals } from "../Any/IfEquals";
import type { IfExtends } from "../Any/IfExtends";
import type { AnyFunction } from "../Misc/AnyFunction";

/**
 * @hidden
 */
type _EqualValidator<Expect, Reality, Prompt extends string = "类型错误"> = IfEquals<
  Expect,
  Reality,
  unknown,
  IfExtends<Expect, AnyFunction, `⚠️${Prompt}⚠️`, () => `⚠️${Prompt}⚠️`>
>;

/**
 * @description 值类型验证函数
 * @example
 * ```ts
 *  const num = 123;
 *  const obj = { num };
 *
 *  ValueChecking<123>()(num);
 *
 *  ValueChecking<{ num: number }>()(obj);
 *
 *  //@ts-expect-error obj ⚠️类型错误⚠️
 *  ValueChecking<{ num: string }>()(obj);
 * ```
 * ⚠️高阶函数在第二个函数入参⚠️
 */
export const ValueChecking =
  <ExpectType>() => <ValueType>(val: ValueType & _EqualValidator<ExpectType, ValueType>): ValueType => val;
