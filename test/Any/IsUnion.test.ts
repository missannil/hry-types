import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IsUnion } from "../../src/Any/_api";

type Test1 = IsUnion<1 | 2>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsUnion<boolean>;

type Test2Expect = true;

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = IsUnion<1>;

type Test3Expect = false;

Checking<Test3, Test3Expect, Test.Pass>;
