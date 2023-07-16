import { type Test, TypeChecking } from "../../src";
import type { _Contains } from "../../src/Any/_Contains";

type Test1 = _Contains<1 | "a", 1>;

type Test1expect = true;

TypeChecking<Test1, Test1expect, Test.Pass>;

type Test2 = _Contains<1 | "a", "a">;

type Test2expect = true;

TypeChecking<Test2, Test2expect, Test.Pass>;

type Test3 = _Contains<1 | "a", number>;

type Test3expect = true;

TypeChecking<Test3, Test3expect, Test.Pass>;

type Test4 = _Contains<1 | "a", string>;

type Test4expect = true;

TypeChecking<Test4, Test4expect, Test.Pass>;

type Test5 = _Contains<1 | "a", boolean>;

type Test5expect = false;

TypeChecking<Test5, Test5expect, Test.Pass>;

type Test6 = _Contains<1 | "a", boolean | string>;

type Test6expect = true;

TypeChecking<Test6, Test6expect, Test.Pass>;

type Test7 = _Contains<1 | "a", boolean | number>;

type Test7expect = true;

TypeChecking<Test7, Test7expect, Test.Pass>;
