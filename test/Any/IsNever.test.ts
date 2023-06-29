import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IsNever } from "../../src/Any/IsNever";

type Test1 = IsNever<never>; // => true

TypeChecking<Test1, true, Test.Pass>;

type Test2 = IsNever<undefined>; // => false

TypeChecking<Test2, false, Test.Pass>;

type Test3 = IsNever<null>; // => false

TypeChecking<Test3, false, Test.Pass>;

type Test4 = IsNever<{}>; // => false

TypeChecking<Test4, false, Test.Pass>;

type Test5 = IsNever<unknown>; // => false

TypeChecking<Test5, false, Test.Pass>;

type Test6 = IsNever<any>; // => false

TypeChecking<Test6, false, Test.Pass>;

type Test7 = IsNever<never[]>; // => false

TypeChecking<Test7, false, Test.Pass>;

type Test8 = IsNever<[never]>; // => false

TypeChecking<Test8, false, Test.Pass>;

type Test9 = IsNever<never | string>; // => false

TypeChecking<Test9, false, Test.Pass>;

type Test10 = IsNever<object>; // => false

TypeChecking<Test10, false, Test.Pass>;
