import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Last } from "../../src/Union/Last";

type Test1 = Last<1 | 2 | 3>; // => 3

TypeChecking<Test1, 3, Test.Pass>;

type Test2 = Last<"a" | "b" | "c">; // => "c"

TypeChecking<Test2, "c", Test.Pass>;

type Test3 = Last<any>; // => any

TypeChecking<Test3, any, Test.Pass>;

type Test4 = Last<never>; // => never

TypeChecking<Test4, never, Test.Pass>;

type Test5 = Last<unknown>; // => unknown

TypeChecking<Test5, unknown, Test.Pass>;
