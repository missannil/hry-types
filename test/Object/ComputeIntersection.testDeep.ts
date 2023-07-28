import { Checking, type Test } from "../../src";
import type { ComputeIntersectionDeep } from "../../src/Object/ComputeIntersectionDeep";

// ComputeIntersection的递归
type O0 = { a: { b: string } & { c: number } };

type O1 = { e: { f: string } & { f: number } };

type Test1 = ComputeIntersectionDeep<O0 & O1>;

type TestExpect1 = {
  a: { b: string; c: number };
  e: { f: string & number };
};

Checking<Test1, TestExpect1, Test.Pass>;
