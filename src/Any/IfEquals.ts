import type { _IfEquals } from "../_internal/_IfEquals";
import type { _OrEquals } from "../_internal/_OrEquals";
import type { InferOr } from "../List/InferOr";

/**
 * @description  IF相等判断 Then(相等,默认unknown),Else(不等,默认返回A)。B可为Or数组，即A与B数组其中一项相等即返回Then,都不相等返回Else
 * @link [test](./IfEquals.test.ts)
 * @returns Then or Else
 * 不支持对象的交叉或联合.应在传入前使用[ComputeIntersection](../Object/ComputeIntersection.ts)或[ComputeUnion](../Object/ComputeUnion.ts)
 */
export type IfEquals<A, B, Then = unknown, Else = A, _Or extends unknown[] | false = InferOr<B>> = _Or extends false
  ? _IfEquals<A, B, Then, Else>
  : _OrEquals<A, _Or, Then, Else>;
