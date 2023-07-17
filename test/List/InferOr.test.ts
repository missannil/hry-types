import type { Test } from "../../src";
import { Checking } from "../../src";
import type { InferOr } from "../../src/List/InferOr";
import type { OrSign } from "../../src/List/Or";

type Test1 = InferOr<[1, 2, OrSign]>;

Checking<Test1, [1, 2], Test.Pass>;

type Test2 = InferOr<[unknown, {}, OrSign]>;

Checking<Test2, [unknown, {}], Test.Pass>;

type Test3 = InferOr<[]>;

Checking<Test3, false, Test.Pass>;

type Test4 = InferOr<[1, 2]>;

Checking<Test4, false, Test.Pass>;

type Test5 = InferOr<[1, 2, OrSign, unknown]>;

Checking<Test5, false, Test.Pass>;

type Test6 = InferOr<never>;

Checking<Test6, false, Test.Pass>;
