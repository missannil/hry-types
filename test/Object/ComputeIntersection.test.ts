import { type Test, TypeChecking } from "../../src";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";

type Test1 = ComputeIntersection<{ a: string } & { b: number }>;

type TestExpect1 = { a: string; b: number };

TypeChecking<Test1, TestExpect1, Test.Pass>;

type Test2 = ComputeIntersection<{ a: string } & { a: number }>;

type TestExpect2 = { a: string & number };

TypeChecking<Test2, TestExpect2, Test.Pass>;
