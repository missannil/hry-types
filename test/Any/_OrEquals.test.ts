import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { _OrEquals } from "../../src/Any/_OrEquals";

type Test1 = _OrEquals<1, [1, 2, 3], "Then", "Else">; // => "Then"

TypeChecking<Test1, "Then", Test.Pass>;

type Test2 = _OrEquals<2, [1, 2, 3], "Then", "Else">; // => "Then"

TypeChecking<Test2, "Then", Test.Pass>;

type Test3 = _OrEquals<3, [1, 2, 3], "Then", "Else">; // => "Then"

TypeChecking<Test3, "Then", Test.Pass>;

type Test4 = _OrEquals<4, [1, 2, 3], "Then", "Else">; // => "Else"

TypeChecking<Test4, "Else", Test.Pass>;

type Test5 = _OrEquals<"a", ["a", "b", "c"], "Then", "Else">; // => "Then"

TypeChecking<Test5, "Then", Test.Pass>;

type Test6 = _OrEquals<"b", ["a", "b", "c"], "Then", "Else">; // => "Then"

TypeChecking<Test6, "Then", Test.Pass>;

type Test7 = _OrEquals<"c", ["a", "b", "c"], "Then", "Else">; // => "Then"

TypeChecking<Test7, "Then", Test.Pass>;

type Test8 = _OrEquals<"d", ["a", "b", "c"], "Then", "Else">; // => "Else"

TypeChecking<Test8, "Else", Test.Pass>;

type Test9 = _OrEquals<1, [1, "a", true], "Then", "Else">; // => "Then"

TypeChecking<Test9, "Then", Test.Pass>;

type Test10 = _OrEquals<"a", [1, "a", true], "Then", "Else">; // => "Then"

TypeChecking<Test10, "Then", Test.Pass>;

type Test11 = _OrEquals<true, [1, "a", true], "Then", "Else">; // => "Then"

TypeChecking<Test11, "Then", Test.Pass>;

type Test12 = _OrEquals<false, [1, "a", true], "Then", "Else">; // => "Else"

TypeChecking<Test12, "Else", Test.Pass>;
