import type { IfEquals } from "../Any/IfEquals";
import type { IfExtends } from "../Any/IfExtends";

/**
 * @hidden
 */
type _EqualValidator<Expect, Reality, Prompt extends string = "类型错误"> = IfEquals<
  Expect,
  Reality,
  unknown,
  IfExtends<Expect, Function, `⚠️${Prompt}⚠️`, () => `⚠️${Prompt}⚠️`>
>;

/**
 * @description 值类型验证器
 * @example
 * ```ts
 *  const num = 123;
 *  const obj = { num };
 *
 *  ExpectValue<123>()(num);
 *
 *  ExpectValue<{ num: number }>()(obj);
 *
 *  //@ts-expect-error obj ⚠️类型错误⚠️
 *  ExpectValue<{ num: string }>()(obj);
 * ```
 * ⚠️高阶函数在第二个函数入参⚠️
 */
export const ValueChecking =
  <ExpectType>() => <ValueType>(val: ValueType & _EqualValidator<ExpectType, ValueType>): void => {
    val;
  };
// test
const num = 123;
const obj = { num };
ValueChecking<123>()(num);
ValueChecking<{ num: number }>()(obj);
// @ts-expect-error obj ⚠️类型错误⚠️
ValueChecking<{ num: string }>()(obj);
