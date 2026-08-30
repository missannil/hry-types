import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { RemoveSubstring } from "../../src/Str/_index";

// ============================================================
// 移除字符串中的所有匹配内容
// ============================================================
type Test1 = RemoveSubstring<"a-b-c", "-">;
Checking<Test1, "abc", Test.Pass>;
