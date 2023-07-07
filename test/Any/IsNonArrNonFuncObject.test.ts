import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IsNonArrNonFuncObject } from "../../src/Any/IsNonArrNonFuncObject";

type Test1 = IsNonArrNonFuncObject<{}>; // => true

TypeChecking<Test1, true, Test.Pass>;

type Test2 = IsNonArrNonFuncObject<{ a: number }>; // => true

TypeChecking<Test2, true, Test.Pass>;

type Test3 = IsNonArrNonFuncObject<unknown[]>; // => false

TypeChecking<Test3, false, Test.Pass>;

type Test4 = IsNonArrNonFuncObject<() => void>; // => false

TypeChecking<Test4, false, Test.Pass>;

type Test5 = IsNonArrNonFuncObject<number>; // => false

TypeChecking<Test5, false, Test.Pass>;

type Test6 = IsNonArrNonFuncObject<boolean>; // => false

TypeChecking<Test6, false, Test.Pass>;

type Test7 = IsNonArrNonFuncObject<null>; // => false

TypeChecking<Test7, false, Test.Pass>;

type Test8 = IsNonArrNonFuncObject<undefined>; // => false

TypeChecking<Test8, false, Test.Pass>;

type Test9 = IsNonArrNonFuncObject<never>; // => false

TypeChecking<Test9, never, Test.Pass>;

type Test10 = IsNonArrNonFuncObject<void>; // => false

TypeChecking<Test10, false, Test.Pass>;

type Test11 = IsNonArrNonFuncObject<bigint>; // => false

TypeChecking<Test11, false, Test.Pass>;

type Test12 = IsNonArrNonFuncObject<symbol>; // => false

TypeChecking<Test12, false, Test.Pass>;
