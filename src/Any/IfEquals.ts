import type { _IfEquals } from "../_internal/_IfEquals";
import type { _OrEquals } from "../_internal/_OrEquals";
import type { InferOr } from "../List/InferOr";

/**
 * @description  IF相等判断,相等返回Then(默认unknown),不等返回Else(默认A1)。A2可为Or类型，即A1与A2数组其中一项相等即返回Then,都不相等返回Else
 * @returns Then or Else
 */
export type IfEquals<A1, A12, Then = unknown, Else = A1, _Or extends unknown[] | false = InferOr<A12>> = _Or extends
  false ? _IfEquals<A1, A12, Then, Else>
  : _OrEquals<A1, _Or, Then, Else>;
