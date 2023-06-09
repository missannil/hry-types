import { type Test, TypeChecking } from "../../src";
import type { Select } from "../../src/Object/Select";

type Obj = { num: 123; str?: string; union: boolean; fn: () => string };

type Test1 = Select<Obj, number, "extends->">;

type Test1Expected = { num: 123 };

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = Select<Obj, string, "extends->">;

// string | undefined 不符合 extends-> 的要求
type Test2Expected = {};

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = Select<Obj, string, "<-extends">;

type Test3Expected = { str?: string };

TypeChecking<Test3, Test3Expected, Test.Pass>;

type Test4 = Select<Obj, string, "equals">;

type Test4Expected = {};

TypeChecking<Test4, Test4Expected, Test.Pass>;

type Test5 = Select<Obj, string | undefined, "equals">;

type Test5Expected = { str?: string };

TypeChecking<Test5, Test5Expected, Test.Pass>;

// copilot 都懒得用 其他的就不写了
