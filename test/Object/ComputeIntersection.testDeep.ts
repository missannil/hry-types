import { Checking, type Test } from "../../src";
import type { ComputeIntersectionDeep } from "../../src/Object/ComputeIntersectionDeep";

// ComputeIntersection的递归
type A = { a: string };

type B = { b: number };

type C = { c: boolean };

type Test1 = ComputeIntersectionDeep<A & B>;

type TestExpect1 = {
  a: string;
  b: number;
};

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = ComputeIntersectionDeep<A & B & C>;

type TestExpect2 = {
  a: string;
  b: number;
  c: boolean;
};

Checking<Test2, TestExpect2, Test.Pass>;
