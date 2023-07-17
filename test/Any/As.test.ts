// 测试 path: ./src/Any/As.test.ts

import { Checking, type Test } from "../../src";
import type { As } from "../../src/Any/As";

type Test1 = As<0, number>;

type Test1Expect = 0;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = As<string, number>;

type Test2Expect = never;

Checking<Test2, Test2Expect, Test.Pass>;
