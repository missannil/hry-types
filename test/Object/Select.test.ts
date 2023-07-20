import { Checking, type Test } from "../../src";
import type { Select } from "../../src/Object/Select";

type Test1 = Select<{ a: 123 }, number>;

type TestExpect1 = { a: 123 };

Checking<Test1, TestExpect1, Test.Pass>;

type Test2 = Select<{ a: number; b: string }, number>;

type TestExpect2 = { a: number };

Checking<Test2, TestExpect2, Test.Pass>;

type Test3 = Select<{ a: number; b: string; c: boolean }, number | string>;

type TestExpect3 = { a: number; b: string };

Checking<Test3, TestExpect3, Test.Pass>;

type Test4 = Select<{ a: number; b: string; c: boolean }, number | string, "<-extends">;

type TestExpect4 = {};

Checking<Test4, TestExpect4, Test.Pass>;

type Test5 = Select<{ a: number; b: string; c: boolean }, number | string, "<-contains">;

type TestExpect5 = { a: number; b: string };

Checking<Test5, TestExpect5, Test.Pass>;

type Test6 = Select<{ a: string | number; b: string | boolean; c: boolean }, string, "contains->">;

type TestExpect6 = { a: string | number; b: string | boolean };

Checking<Test6, TestExpect6, Test.Pass>;

type Test7 = Select<{ a: number | string; b: string; c: boolean }, number | string, "equals">;

type TestExpect7 = { a: number | string };

Checking<Test7, TestExpect7, Test.Pass>;

type Test8 = Select<{ a?: string }, string>;

type TestExpect8 = { a?: string };

Checking<Test8, TestExpect8, Test.Pass>;
