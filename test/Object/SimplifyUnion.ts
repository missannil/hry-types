import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { _SimplifyUnion, ComputeUnion } from "../../src/Object/_index";

type Test1 = _SimplifyUnion<ComputeUnion<{ a: number } | { b: string }>>;

type Test1Expected = { a: number; b: string };

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = _SimplifyUnion<ComputeUnion<{ a: number; b: boolean } | { b: string; c: symbol }>>;

type Test2Expected = { b: string | boolean; c: symbol; a: number };

Checking<Test2, Test2Expected, Test.Pass>;
