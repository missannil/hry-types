import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { HasSubstring } from "../../src/Str/_index";

// ============================================================
// 包含子字符串
// ============================================================
type Test1 = HasSubstring<"hello world", "world">;
Checking<Test1, true, Test.Pass>;

// ============================================================
// 不包含子字符串
// ============================================================
type Test2 = HasSubstring<"hello world", "typescript">;
Checking<Test2, false, Test.Pass>;
