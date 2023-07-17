import { Checking, type Test } from "../../src";
import type { Filter } from "../../src/Object/Filter";

type Test1 = Filter<{ a: number }, number>;

type TestExpect1 = {};

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = Filter<{ a: number; b: string }, number>;

type TestExpect2 = { b: string };

Checking<Test2, TestExpect2, Test.Pass>;

type Test3 = Filter<{ a: number; b: string; c: boolean }, number | string>;

type TestExpect3 = { c: boolean };

Checking<Test3, TestExpect3, Test.Pass>;

type Test4 = Filter<{ a: number | string; b: string; c: boolean }, number | string, "<-extends">;

type TestExpect4 = { b: string; c: boolean };

Checking<Test4, TestExpect4, Test.Pass>;

type Test5 = Filter<{ a: number | string; b: string; c: boolean }, string, "equals">;

type TestExpect5 = { a: number | string; c: boolean };

Checking<Test5, TestExpect5, Test.Pass>;
