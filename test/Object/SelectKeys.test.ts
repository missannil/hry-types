import { Checking, type Test } from "../../src";
import type { SelectKeys } from "../../src/Object/SelectKeys";

type Obj = {
  num: number;
  literal_num: 123;
  str?: string;
  literal_str?: "str";
  unionStr_num: string | number;
  obj: object | null;
};

type Test1 = SelectKeys<Obj, number>;

type TestExpect1 = "num" | "literal_num";

Checking<Test1, TestExpect1, Test.Pass>;

//  default match = "extends->"
type Test2 = SelectKeys<Obj, object>;

type TestExpect2 = never;

Checking<Test2, TestExpect2, Test.Pass>;

type Test3 = SelectKeys<Obj, number | string>;

type TestExpect3 = "num" | "literal_num" | "unionStr_num";

Checking<Test3, TestExpect3, Test.Pass>;

type Test4 = SelectKeys<Obj, number | string, "<-extends">;

type TestExpect4 = "unionStr_num";

Checking<Test4, TestExpect4, Test.Pass>;

type Test5 = SelectKeys<Obj, number | string, "<-contains">;

type TestExpect5 = "str" | "num" | "unionStr_num";

Checking<Test5, TestExpect5, Test.Pass>;

type Test6 = SelectKeys<Obj, string, "contains->">;

type TestExpect6 = "str" | "literal_str" | "unionStr_num";

Checking<Test6, TestExpect6, Test.Pass>;

type Test7 = SelectKeys<Obj, number | string, "equals">;

type TestExpect7 = "unionStr_num";

Checking<Test7, TestExpect7, Test.Pass>;

type Test8 = SelectKeys<Obj, string>;

type TestExpect8 = never;

Checking<Test8, TestExpect8, Test.Pass>;

type Test9 = SelectKeys<Required<Obj>, string>;

type TestExpect9 = "str" | "literal_str";

Checking<Test9, TestExpect9, Test.Pass>;
