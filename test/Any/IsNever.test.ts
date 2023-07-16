import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IsNever } from "../../src/Any/IsNever";

type Test1 = IsNever<never>;

type Test1Expect = true;

TypeChecking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsNever<undefined>;

type Test2Expect = false;

TypeChecking<Test2, Test2Expect, Test.Pass>;
