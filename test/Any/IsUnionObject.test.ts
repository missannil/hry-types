import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IsUnionObject } from "../../src/Any/IsUnionObject";

type Test0 = IsUnionObject<{ a: string } | { b: number }>; // => true

type Test1 = IsUnionObject<"a" | "b">; // => false

type Test2 = IsUnionObject<{ a: string } & { b: number }>; // => false

type Test3 = IsUnionObject<number>; // => false

TypeChecking<Test0, true, Test.Pass>();

TypeChecking<Test1, false, Test.Pass>();

TypeChecking<Test2, false, Test.Pass>();

TypeChecking<Test3, false, Test.Pass>();
