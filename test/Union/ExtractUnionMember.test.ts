import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { ExtractUnionMember } from "../../src/Union/ExtractUnionMember";

type Test1 = ExtractUnionMember<1 | 2 | 3>;

type Test1Expected = 3;

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = ExtractUnionMember<"a" | "b" | "c">;

type Test2Expected = "c";

Checking<Test2, Test2Expected, Test.Pass>;
