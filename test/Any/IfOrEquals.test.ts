import { type Test, TypeChecking } from "../../src";
import type { IfOrEquals } from "../../src/Any/IfOrEquals";

// 测试1 与第一项相等,无Then,无Else 返回默认Then(unknown)
type Test1 = IfOrEquals<"a", ["a", "b", "c"]>;

type Test1Expect = unknown;

TypeChecking<Test1, Test1Expect, Test.Pass>;

// 测试2 与任意一项相等 无Then,无Else 返回默认Then(unknown)
type Test2 = IfOrEquals<"a", ["b", "c", "a"]>;

type Test2Expect = unknown;

TypeChecking<Test2, Test2Expect, Test.Pass>;

// 测试3 与任意一项不相等 无Then,无Else 返回默认Else(第一个参数)
type Test3 = IfOrEquals<"a", ["b", "c"]>;

type Test3Expect = "a";

TypeChecking<Test3, Test3Expect, Test.Pass>;

// 测试4  与第一项相等,有Then,无Else 返回Then

type Test4 = IfOrEquals<"a", ["a", "b", "c"], "Then">;

type Test4Expect = "Then";

TypeChecking<Test4, Test4Expect, Test.Pass>;

// 测试5  与任意一项相等,有Then,无Else 返回Then

type Test5 = IfOrEquals<"a", ["b", "c", "a"], "Then">;

type Test5Expect = "Then";

TypeChecking<Test5, Test5Expect, Test.Pass>;

// 测试6  与任意一项不相等,有Then,无Else 返回默认Else(第一个参数)

type Test6 = IfOrEquals<"a", ["b", "c"], "Then">;

type Test6Expect = "a";

TypeChecking<Test6, Test6Expect, Test.Pass>;

// 测试7  与任意一项相等,有Then,有Else 返回Then

type Test7 = IfOrEquals<"a", ["b", "c", "a"], "Then", "Else">;

type Test7Expect = "Then";

TypeChecking<Test7, Test7Expect, Test.Pass>;

// 测试8  与任意一项不相等,有Then,有Else 返回Else

type Test8 = IfOrEquals<"a", ["b", "c"], "Then", "Else">;

type Test8Expect = "Else";

TypeChecking<Test8, Test8Expect, Test.Pass>;
