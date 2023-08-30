import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IsPureObject } from "../../src/Any/_api";

type Test1 = IsPureObject<{ a: number }>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsPureObject<() => any>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = IsPureObject<unknown[]>;

type Test3Expect = false;

Checking<Test3, Test3Expect, Test.Pass>;

type Test4 = IsPureObject<readonly unknown[]>;

type Test4Expect = false;

Checking<Test4, Test4Expect, Test.Pass>;
