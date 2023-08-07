import { Checking, type Test } from "../../src";
import type { ComputeDeep } from "../../src/Object/ComputeDeep";

// Compute的递归
type A = { a: string };

type B = { b: number };

type C = { c: boolean };

type Test1 = ComputeDeep<A & B>;

type TestExpect1 = {
  a: string;
  b: number;
};

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = ComputeDeep<A & B & C>;

type TestExpect2 = {
  a: string;
  b: number;
  c: boolean;
};

Checking<Test2, TestExpect2, Test.Pass>;
