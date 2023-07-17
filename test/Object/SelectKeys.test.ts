import { Checking, type Test } from "../../src";
import type { SelectKeys } from "../../src/Object/SelectKeys";

type Obj = { num: 123; str?: string; union: boolean; fn: () => string };

type Test1 = SelectKeys<Obj, number, "extends->">;

type Test1Expected = "num";

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = SelectKeys<Obj, string, "extends->">;

// string | undefined 不符合 extends-> 的要求
type Test2Expected = never;

Checking<Test2, Test2Expected, Test.Pass>;

type Test3 = SelectKeys<Obj, string, "<-extends">;

type Test3Expected = "str";

Checking<Test3, Test3Expected, Test.Pass>;

type Test4 = SelectKeys<Obj, string, "equals">;

type Test4Expected = never;

Checking<Test4, Test4Expected, Test.Pass>;

type Test5 = SelectKeys<Obj, string | undefined, "equals">;

type Test5Expected = "str";

Checking<Test5, Test5Expected, Test.Pass>;

// copilot 都懒得用 其他的就不写了
