import { Checking, type Test } from "../../src";
import type { ReturnTypeInObject } from "../../src/Object/ReturnTypeInObject";

type TestObj = ReturnTypeInObject<{ num: 123; fn: () => string }>;

type TestObjExpected = { num: 123; fn: string };

Checking<TestObj, TestObjExpected, Test.Pass>;
