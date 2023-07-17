import type { Test } from "../../src";
import { Checking } from "../../src";
import type { Last } from "../../src/Union/Last";

type Test1 = Last<1 | 2 | 3>; // => 3

Checking<Test1, 3, Test.Pass>;

type Test2 = Last<"a" | "b" | "c">; // => "c"

Checking<Test2, "c", Test.Pass>;

type Test3 = Last<any>; // => any

Checking<Test3, any, Test.Pass>;

type Test4 = Last<never>; // => never

Checking<Test4, never, Test.Pass>;

type Test5 = Last<unknown>; // => unknown

Checking<Test5, unknown, Test.Pass>;
