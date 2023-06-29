import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IsUnion } from "../../src/Any/IsUnion";

type Test1 = IsUnion<string | number>; // => true

TypeChecking<Test1, true, Test.Pass>;

type Test2 = IsUnion<string>; // => false

TypeChecking<Test2, false, Test.Pass>;

type Test3 = IsUnion<number>; // => false

TypeChecking<Test3, false, Test.Pass>;

type Test4 = IsUnion<string | number | boolean>; // => true

TypeChecking<Test4, true, Test.Pass>;

type Test5 = IsUnion<never>; // => false

TypeChecking<Test5, false, Test.Pass>;

type Test6 = IsUnion<undefined | null>; // => true

TypeChecking<Test6, true, Test.Pass>;

type Test7 = IsUnion<{} | (() => void)>; // => true

TypeChecking<Test7, true, Test.Pass>;

type Test8 = IsUnion<{ a: number } | { b: string }>; // => true

TypeChecking<Test8, true, Test.Pass>;

type Test9 = IsUnion<{ a: number; b: string }>; // => false

TypeChecking<Test9, false, Test.Pass>;

type Test10 = IsUnion<number[]>; // => false

TypeChecking<Test10, false, Test.Pass>;

type Test11 = IsUnion<string[]>; // => false

TypeChecking<Test11, false, Test.Pass>;

type Test12 = IsUnion<boolean[]>; // => false

TypeChecking<Test12, false, Test.Pass>;

type Test13 = IsUnion<() => void>; // => false

TypeChecking<Test13, false, Test.Pass>;

type Test14 = IsUnion<bigint>; // => false

TypeChecking<Test14, false, Test.Pass>;

type Test15 = IsUnion<symbol>; // => false

TypeChecking<Test15, false, Test.Pass>;
