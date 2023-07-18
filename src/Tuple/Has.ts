import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

/**
 * 元组中是否包含匹配的类型
 * @param Tuple - 元组类型
 * @param A - 匹配类型 Any
 * @param match - 匹配方式(_Match)
 * @example
 * ```ts
 * type TestTuple = [1, string, boolean, never, any];
 * type Test1 = Has<TestTuple, 1>; // true
 * type Test2 = Has<TestTuple, "str">; // false
 * type Test3 = Has<TestTuple, "str","<-extends">; // true
 * type Test4 = Has<TestTuple, "str","extends->">; // false
 * type Test5 = Has<TestTuple, "str","equals">; // false
 * type Test6 = Has<TestTuple, any>; // true
 * type Test7 = Has<TestTuple, never,"equals">; // true
 *
 * ```
 * @returns true or false
 */
export type Has<Tuple, A, Match extends _Match = "extends->"> = Tuple extends [infer Head, ...infer Rest]
  ? Is<Head, A, Match> extends true ? true : Has<Rest, A, Match>
  : false;
