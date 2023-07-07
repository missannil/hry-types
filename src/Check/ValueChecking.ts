import type { Equals } from "../Any/Equals";
import type { Function } from "../Misc/Function";

type _EqualValidator<ExpectType, ValueType, Prompt extends string = "类型错误"> = Equals<ExpectType, ValueType> extends
  true ? unknown : ExpectType extends Function ? `⚠️${Prompt}⚠️` : () => `⚠️${Prompt}⚠️`;

/**
 * @description 值类型验证函数
 * @example
 * ```ts
 * import type { ValueChecking, Test } from "hry-types";
 * const a = 123
 * const b = 456
 * ValueChecking<number>()(a) => a will be error
 * ValueChecking<456>()(b) => ok
 * ```
 */
export const ValueChecking =
  <ExpectType>() => <ValueType>(val: ValueType & _EqualValidator<ExpectType, ValueType>): ValueType => val;
