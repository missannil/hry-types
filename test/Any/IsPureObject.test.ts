import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IsPureObject } from "../../src/Any/_api";

type Test0 = IsPureObject<{ a: number }>;

Checking<Test0, true, Test.Pass>;

type Test1 = IsPureObject<Date>;

Checking<Test1, false, Test.Pass>;

type Test2 = IsPureObject<RegExp>;

Checking<Test2, false, Test.Pass>;

type Test3 = IsPureObject<() => any>;

Checking<Test3, false, Test.Pass>;

type Test4 = IsPureObject<unknown[]>;

Checking<Test4, false, Test.Pass>;

type Test5 = IsPureObject<readonly [1, 2, 3]>;

Checking<Test5, false, Test.Pass>;

type Test6 = IsPureObject<Set<[1, 2, 3]>>;

Checking<Test6, false, Test.Pass>;

type Test7 = IsPureObject<Map<"key", "value">>;

Checking<Test7, false, Test.Pass>;
