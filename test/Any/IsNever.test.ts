import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IsNever } from "../../src/Any/IsNever";

type Test1 = IsNever<never>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsNever<undefined>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;
