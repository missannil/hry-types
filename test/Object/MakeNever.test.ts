import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { MakeNever } from "../../src/Object/_index";

type Obj = { a?: number; b: string; c: boolean };

// ============================================================
// 指定属性转换为可选的 never
// ============================================================
type Test1 = MakeNever<Obj, "a" | "b">;
type TestExpect1 = { a?: never; b?: never; c: boolean };
Checking<Test1, TestExpect1, Test.Pass>;
