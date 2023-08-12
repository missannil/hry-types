// test for src\Any\OrEquals.ts
import type { Test } from "../../src";
import { Checking } from "../../src";
import type { OrEquals } from "../../src/Any/_api";

type Test1 = OrEquals<1, [1, 2, 3]>;

type Test1expect = true;

Checking<Test1, Test1expect, Test.Pass>;

type Test2 = OrEquals<1, [2, 3, number]>;

type Test2expect = false;

Checking<Test2, Test2expect, Test.Pass>;
