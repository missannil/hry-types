import { type Test, TypeChecking } from "../../src";
import type { ReturnTypeInObject } from "../../src/Object/ReturnTypeInObject";

type Obj = { num: 123; fn: () => string };

type TestObj = ReturnTypeInObject<Obj>;

type TestObjExpected = { num: 123; fn: string };

TypeChecking<TestObj, TestObjExpected, Test.Pass>;
