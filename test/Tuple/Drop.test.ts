// test for src\Tuple\Drop.ts
import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { Drop } from "../../src/Tuple/Drop";

type test1 = Drop<[1, 2, 3], 2>;

type test1Expect = [1, 3];

Checking<test1, test1Expect, Test.Pass>;

type Test2 = Drop<[1, 2, 3], 4>;

type Test2Expect = [1, 2, 3];

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = Drop<[], 1>;

type Test3Expect = [];

Checking<Test3, Test3Expect, Test.Pass>;
