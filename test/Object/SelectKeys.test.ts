import { Checking, type Test } from "../../src";
import type { SelectKeys } from "../../src/Object/SelectKeys";

type Test1 = SelectKeys<{ a: 123 }, number>;

type TestExpect1 = "a";

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = SelectKeys<{ a: number; b: string }, number>;

type TestExpect2 = "a";

Checking<Test2, TestExpect2, Test.Pass>;

type Test3 = SelectKeys<{ a: number; b: string; c: boolean }, number | string>;

type TestExpect3 = "a" | "b";

Checking<Test3, TestExpect3, Test.Pass>;

type Test4 = SelectKeys<{ a: number; b: string; c: boolean }, number | string, "<-extends">;

type TestExpect4 = never;

Checking<Test4, TestExpect4, Test.Pass>;

type Test5 = SelectKeys<{ a: number; b: string; c: boolean }, number | string, "<-contains">;

type TestExpect5 = "a" | "b";

Checking<Test5, TestExpect5, Test.Pass>;

type Test6 = SelectKeys<{ a: string | number; b: string | boolean; c: boolean }, string, "contains->">;

type TestExpect6 = "a" | "b";

Checking<Test6, TestExpect6, Test.Pass>;

type Test7 = SelectKeys<{ a: number | string; b: string; c: boolean }, number | string, "equals">;

type TestExpect7 = "a";

Checking<Test7, TestExpect7, Test.Pass>;

type Test8 = SelectKeys<{ a?: string }, string>;

type TestExpect8 = "a";

Checking<Test8, TestExpect8, Test.Pass>;
