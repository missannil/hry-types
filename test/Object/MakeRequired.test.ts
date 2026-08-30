import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { MakeRequired } from "../../src/Object/_index";

type Obj = { a?: number; b?: string; c: boolean };

// ============================================================
// 指定可选属性转换为必选
// ============================================================
type Test1 = MakeRequired<Obj, "a" | "b">;
type TestExpect1 = { a: number; b: string; c: boolean };
Checking<Test1, TestExpect1, Test.Pass>;
