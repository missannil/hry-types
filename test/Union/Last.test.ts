import type { Test } from "../../src";
import { Checking } from "../../src";
import type { Last } from "../../src/Union/Last";

type Test1 = Last<1 | 2 | 3>;

type Test1Expected = 3;

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = Last<"a" | "b" | "c">;

type Test2Expected = "c";

Checking<Test2, Test2Expected, Test.Pass>;
