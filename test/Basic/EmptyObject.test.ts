import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { EmptyObject } from "../../src/Basic/_index";

// ============================================================
// 空对象类型
// ============================================================
type Test1 = {} extends EmptyObject ? true : false;
Checking<Test1, true, Test.Pass>;
