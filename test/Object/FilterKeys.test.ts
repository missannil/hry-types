import { Checking, type Test } from "../../src";
import type { FilterKeys } from "../../src/Object/FilterKeys";

type Test1 = FilterKeys<{ a: number }, number>;

type TestExpect1 = never;

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = FilterKeys<{ a: number; b: string }, number>;

type TestExpect2 = "b";

Checking<Test2, TestExpect2, Test.Pass>;

type Test3 = FilterKeys<{ a: number; b: string; c: boolean }, number | string>;

type TestExpect3 = "c";

Checking<Test3, TestExpect3, Test.Pass>;

type Test4 = FilterKeys<{ a: number; b: string; c: boolean }, number | string, "<-extends">;

type TestExpect4 = "a" | "b" | "c";

Checking<Test4, TestExpect4, Test.Pass>;

type Test5 = FilterKeys<{ a: number | string; b: string; c: boolean }, number | string, "<-contains">;

type TestExpect5 = "c";

Checking<Test5, TestExpect5, Test.Pass>;

type Test6 = FilterKeys<{ a: number | string; b: string | number; c: boolean }, string, "contains->">;

type TestExpect6 = "c";

Checking<Test6, TestExpect6, Test.Pass>;

type Test7 = FilterKeys<{ a: number | string; b: string; c: boolean }, number | string, "equals">;

type TestExpect7 = "b" | "c";

Checking<Test7, TestExpect7, Test.Pass>;

type Test8 = FilterKeys<{ a?: string }, string>;

type TestExpect8 = never;

Checking<Test8, TestExpect8, Test.Pass>;
