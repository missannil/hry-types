import { Checking, type Test } from "../../src";
import type { ComputeDeep } from "../../src/Object/ComputeDeep";

// Compute的递归
type A = { a: string; fun: (opt: number) => number };

type B = { b: number; fun: (opt: string) => string };

type C = { a: string | boolean; readonly fun1: () => string };

type Test1 = ComputeDeep<A & B>;

type TestExpect1 = {
  a: string;
  b: number;
  fun: ((opt: number) => number) & ((opt: string) => string);
};

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = ComputeDeep<A & B & C>;

type TestExpect2 = {
  a: string;
  b: number;
  fun: ((opt: number) => number) & ((opt: string) => string);
  readonly fun1: () => string;
};

Checking<Test2, TestExpect2, Test.Pass>;
