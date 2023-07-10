// test for src\Any\OrEquals.ts
import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { OrEquals } from "../../src/Any/OrEquals";

type Test1 = OrEquals<1, [1, 2, 3]>;

type Test1expect = true;

TypeChecking<Test1, Test1expect, Test.Pass>;

type Test2 = OrEquals<1, [2, 3]>;

type Test2expect = false;

TypeChecking<Test2, Test2expect, Test.Pass>;

type Test3 = OrEquals<1, [1, 2, 3, 4, 5]>;

type Test3expect = true;

TypeChecking<Test3, Test3expect, Test.Pass>;
