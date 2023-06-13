import type { InferOr } from "../List/InferOr";
import type { Equals } from "./Equals";

type _IfEquals<A, B, Then = unknown, Else = A> = Equals<A, B> extends true ? Then : Else;

type _OrEquals<A, L, Then, Else> = L extends [infer HEAD, ...infer Tail]
  ? Equals<A, HEAD> extends true ? Then : _OrEquals<A, Tail, Then, Else>
  : Else;
/**
 * IF相等判断 Then(相等,默认unknown),Else(不等,默认返回A)。B可为Or数组，即A与B数组其中一项相等即返回Then,都不相等返回Else
 *
 * 缺陷是对象交叉类型返回错误.解决办法使用[MergeIntersection](../Object/MergeIntersection.ts)
 *
 * import { type O, type Test, type L TypeChecking } from "hry-types";
 *
 * TypeChecking<IfEquals<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }, "相等", "不等">, "相等", Test.Fail>;
 * TypeChecking<IfEquals<O.MergeIntersection<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }, "相等", "不等">, "相等", Test.Pass>;
 * TypeChecking<IfEquals<string, L.Or<[1, 2, string]>, "相等", "不等">, "相等", Test.Pass>;
 */
export type IfEquals<A, B, Then = unknown, Else = A, _Or extends unknown[] | false = InferOr<B>> = _Or extends false
  ? _IfEquals<A, B, Then, Else>
  : _OrEquals<A, _Or, Then, Else>;
