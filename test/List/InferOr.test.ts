import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { InferOr } from "../../src/List/InferOr";
import type { OrSign } from "../../src/List/Or";

type Test1 = InferOr<[1, 2, OrSign]>;

TypeChecking<Test1, [1, 2], Test.Pass>;

type Test2 = InferOr<[unknown, {}, OrSign]>;

TypeChecking<Test2, [unknown, {}], Test.Pass>;

type Test3 = InferOr<[]>;

TypeChecking<Test3, false, Test.Pass>;

type Test4 = InferOr<[1, 2]>;

TypeChecking<Test4, false, Test.Pass>;

type Test5 = InferOr<[1, 2, OrSign, unknown]>;

TypeChecking<Test5, false, Test.Pass>;

type Test6 = InferOr<never>;

TypeChecking<Test6, false, Test.Pass>;
