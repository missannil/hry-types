import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { ComputeUnion } from "../../src/Object/ComputeUnion";

type Test1 = ComputeUnion<{ a: number } | { b: string }>;

type Test1Expected = { a: number; b: string };

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = ComputeUnion<{ a: number; b: boolean } | { b: string; c: symbol }>;

type Test2Expected = { b: string | boolean; c: symbol; a: number };

TypeChecking<Test2, Test2Expected, Test.Pass>;
