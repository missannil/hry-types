import { type Test, TypeChecking } from "../../src";
import type { If } from "../../src/Boolean/If";

type Test1 = If<true, "Then", "Else">;

TypeChecking<Test1, "Then", Test.Pass>;

type Test2 = If<false, "Then", "Else">;

TypeChecking<Test2, "Else", Test.Pass>;

type Test5 = If<boolean, "Then", "Else">;

TypeChecking<Test5, "Else", Test.Pass>;
