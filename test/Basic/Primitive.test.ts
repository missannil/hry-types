import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { Primitive } from "../../src/Basic/_index";

// ============================================================
// 原始类型联合
// ============================================================
type Test1 = string extends Primitive ? true : false;
type Test2 = object extends Primitive ? true : false;
Checking<Test1, true, Test.Pass>;
Checking<Test2, false, Test.Pass>;
