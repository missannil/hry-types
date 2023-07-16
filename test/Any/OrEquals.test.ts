// test for src\Any\OrEquals.ts
import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { OrEquals } from "../../src/Any/OrEquals";

type Test1 = OrEquals<1, [1, 2, 3]>;

type Test1expect = true;

TypeChecking<Test1, Test1expect, Test.Pass>;

type Test2 = OrEquals<1, [2, 3, number]>;

type Test2expect = false;

TypeChecking<Test2, Test2expect, Test.Pass>;
