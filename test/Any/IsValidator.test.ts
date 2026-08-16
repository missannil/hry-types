import { Checking, type Test } from "../../src";
import type { Is } from "../../src/Any/_api";

type Test1 = Is<1, number, "extends->">;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

// type Test2 = Is<1, number, "extends->" | "equal">;

// type Test2Expect = "匹配规则必须是单个合法值";

// Checking<Test2, Test2Expect, Test.Pass>;
