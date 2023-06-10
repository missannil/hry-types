import type { EqualValidator } from "./EqualValidator";

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
export const ExpectValue =
  <ExpectType>() => <ValueType>(val: ValueType & EqualValidator<ExpectType, ValueType>): void => {
    val;
  };
// test
const num = 123;
const obj = { num };
ExpectValue<123>()(num);
ExpectValue<{ num: number }>()(obj);
// @ts-expect-error obj ⚠️类型错误⚠️
ExpectValue<{ num: string }>()(obj);
