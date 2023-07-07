import { type Test, TypeChecking } from "../../src";
import type { ComputeIntersectionDeep } from "../../src/Object/ComputeIntersectionDeep";

type Obj0 = {
  a: { b: string } & { c: number };
};

type Obj1 = { e: { f: string } & { g: number } };

type Test1 = ComputeIntersectionDeep<Obj0 & Obj1>;

type TestExpect1 = {
  a: { b: string; c: number };
  e: { f: string; g: number };
};

TypeChecking<Test1, TestExpect1, Test.Pass>;

type Obj2 = {
  a: string;
};

type Obj3 = { a: number };

type Test2 = ComputeIntersectionDeep<Obj2 & Obj3>;

type TestExpect2 = {
  a: never;
};

TypeChecking<Test2, TestExpect2, Test.Pass>;
