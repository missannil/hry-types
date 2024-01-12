import { Checking, type Test } from "..";
import type { Equals } from "../Any/Equals";

/**
 * 从' T '中删除' A '项
 * @param T - 元组类型
 * @param A - 任意类型
 * @returns [[unknown[]]]
 * @example
 */
export type Drop<T extends unknown[], A> = T extends [infer Head, ...infer Rest]
  ? Equals<A, Head> extends true ? Rest : Drop<[...Rest, Head], A>
  : T;

type test = Drop<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3>[number];

type testExpect = [4, 5, 6, 8, 7, 9, 10, 1, 2][number];

Checking<test, testExpect, Test.Pass>;
