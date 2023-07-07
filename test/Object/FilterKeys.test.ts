import { type Test, TypeChecking } from "../../src";
import type { FilterKeys } from "../../src/Object/FilterKeys";

type Test1 = FilterKeys<{ a: number }, number>;

type TestExpect1 = never;

TypeChecking<Test1, TestExpect1, Test.Pass>;

type Test2 = FilterKeys<{ a: number; b: string }, number>;

type TestExpect2 = "b";

TypeChecking<Test2, TestExpect2, Test.Pass>;

type Test3 = FilterKeys<{ a: number; b: string; c: boolean }, number | string>;

type TestExpect3 = "c";

TypeChecking<Test3, TestExpect3, Test.Pass>;

type Test4 = FilterKeys<{ a: number; b: string; c: boolean }, number | string, "<-extends">;

type TestExpect4 = "a" | "b" | "c";

TypeChecking<Test4, TestExpect4, Test.Pass>;

type Test5 = FilterKeys<{ a: number | string; b: string; c: boolean }, number | string, "equals">;

type TestExpect5 = "b" | "c";

TypeChecking<Test5, TestExpect5, Test.Pass>;
