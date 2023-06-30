import { type Test, TypeChecking } from "../../src";
import type { Flat } from "../../src/Object/Flat";

type testObj1 = {
  a: { b: { c: number } };
  d: { e: { f: string } };
};

type Result1 = Flat<testObj1>;

type Expect1 = testObj1 & { "a.b": { c: number }; "d.e": { f: string } };

TypeChecking<Result1, Expect1, Test.Pass>;

type testObj2 = {
  a: string;
};

type Result2 = Flat<testObj2>;

type Expect2 = testObj2;

TypeChecking<Result2, Expect2, Test.Pass>;
